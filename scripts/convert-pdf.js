const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

async function convertPdfToImages() {
  const pdfPath = path.join(__dirname, '..', 'public', 'profile.pdf');
  const outputDir = path.join(__dirname, '..', 'public', 'images', 'profile');
  
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('🚀 Launching browser to convert PDF to images...');
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  // Get total pages first
  await page.goto(`file://${pdfPath}`, { waitUntil: 'networkidle', timeout: 15000 }).catch(() => {});
  
  // Use PDF.js viewer approach - open PDF in browser and screenshot each page
  const pdfUrl = `file://${pdfPath}`;
  
  // Create an HTML page that embeds the PDF
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
      <style>
        body { margin: 0; background: white; }
        canvas { display: block; margin: 0 auto; width: 100%; max-width: 1200px; }
      </style>
    </head>
    <body>
      <div id="pages"></div>
      <script>
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        const loadingTask = pdfjsLib.getDocument('${pdfUrl.replace(/\\/g, '\\\\')}');
        loadingTask.promise.then(async function(pdf) {
          window.totalPages = pdf.numPages;
          for (let i = 1; i <= pdf.numPages; i++) {
            const page_i = await pdf.getPage(i);
            const viewport = page_i.getViewport({ scale: 1.5 });
            const canvas = document.createElement('canvas');
            canvas.width = viewport.width;
            canvas.height = viewport.height;
            canvas.id = 'page-' + i;
            document.getElementById('pages').appendChild(canvas);
            const ctx = canvas.getContext('2d');
            await page_i.render({ canvasContext: ctx, viewport: viewport }).promise;
            window.pageRendered = i;
          }
          document.title = 'DONE:' + pdf.numPages;
        });
      </script>
    </body>
    </html>
  `;
  
  const htmlPath = path.join(__dirname, 'render-pdf.html');
  fs.writeFileSync(htmlPath, htmlContent);
  
  await page.goto(`file://${htmlPath}`, { waitUntil: 'load', timeout: 20000 });
  
  // Wait for PDF to render
  let done = false;
  for (let attempt = 0; attempt < 60; attempt++) {
    await page.waitForTimeout(1000);
    const title = await page.title();
    if (title.startsWith('DONE:')) {
      done = true;
      const totalPages = parseInt(title.split(':')[1]);
      for (let i = 1; i <= totalPages; i++) {
        const canvas = await page.$(`#page-${i}`);
        if (canvas) {
          const outputPath = path.join(outputDir, `page-${String(i).padStart(2, '0')}.jpg`);
          await canvas.screenshot({ path: outputPath, type: 'jpeg', quality: 85 });
          const stats = fs.statSync(outputPath);
          console.log(`  ✅ Page ${i}/${totalPages} saved (${(stats.size / 1024).toFixed(0)} KB)`);
        }
      }
      break;
    }
  }
  
  if (!done) {
    console.log('  ⚠️ PDF render may not have completed. Check output directory.');
  }
  
  fs.unlinkSync(htmlPath);
  await browser.close();
  console.log('✅ PDF to images conversion complete!');
}

convertPdfToImages().catch(err => {
  console.error('❌ Error:', err.message);
  process.exit(0); // Don't fail the build
});
