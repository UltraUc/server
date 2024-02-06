const express = require('express');
const functions = require('firebase-functions');
const { PDFDocument, rgb, StandardFonts } = require('pdf-lib');
const fs = require('fs');
const sharp = require('sharp');
const path = require('path');
const fontkit = require('@pdf-lib/fontkit');

const app = express();
app.use(express.json({ limit: '10000mb' }));




const reverseNumbersOnly = (str) => {
  // Split the string into groups of letters and numbers
  const groups = str.match(/[0-9]+|[א-ת]+|./g) || [];

  // Process each group
  return groups.map(group => {
    // Check if the group is a number and if there are adjacent Hebrew letters in the string
    if (/\d/.test(group) && /[א-ת]/.test(str)) {
      return group.split('').reverse().join('');
    }
    return group;
  }).join('');
};

const loadFont = async () => {
  const fontPath = path.join(__dirname, 'fonts', 'Assistant-Bold.ttf'); 
  return fs.readFileSync(fontPath);
};

app.post('/Pdf', async (req, res) => {
  try {

    const { clientSignatureBase64,installerSignatureBase64,
      One1,One3,One4,One5,One6,One8,One9,One10,One11,One12,One13,One14,One15,One16,One17,One18,One19,One20,One21,One22,One23,One24,
      One25,One26,One27,One28,One29,One30,One31,One32,One66,One33,
      Device1,Device2,Device3,Device4,Device5,Device6,Device7,Device8,Device9,Device10,Device11,Device12,Device13,Device14,Device15,Device16,
      nameInput,Address,City,phoneNumber,DeviceType,WorkBio,userSlug,installerName,LicenseId,ClientName } = req.body;

    const pdfDoc = await PDFDocument.create();

    // Load and embed the custom font
    
    const customFontBytes = await loadFont();
    pdfDoc.registerFontkit(fontkit);
    const customFont = await pdfDoc.embedFont(customFontBytes);



if (One3 && !One24) {

  // Load the background image
  const imagePath2 = path.join(__dirname, 'images', 'background-2.png');
  const imageBytes2 = fs.readFileSync(imagePath2);
  const backgroundImage2 = await pdfDoc.embedPng(imageBytes2);

  const Page2 = (text, x, y, align = 'right') => {
    const fontSize = 35;
    let processedText = reverseNumbersOnly(text);
    const textWidth = customFont.widthOfTextAtSize(processedText, fontSize);
    let textX = x;
    if (align === 'right') {
      textX = x - textWidth; // Align right
    }
    secondPage.drawText(processedText, { x: textX, y: y, size: fontSize, font: customFont, color: rgb(0, 0, 0) });
  
  }

const secondPage = pdfDoc.addPage([2008, 2900]);
const { width  , height  } = secondPage.getSize();


secondPage.drawImage(backgroundImage2, {
  x: 0,
  y: 540,
  width: 2008,
  height: 2281,
});

if (clientSignatureBase64 && clientSignatureBase64.startsWith('iVBOR')) {
  const signatureImageBytes = Buffer.from(clientSignatureBase64, 'base64');

  // Compress the image using sharp
  const compressedImage = await sharp(signatureImageBytes)
    .resize({ width: 250, height: 250 }) // Resize if necessary
    .png() // Convert to PNG (or keep it as PNG)
    .toBuffer();

  const signatureImage = await pdfDoc.embedPng(compressedImage);
  secondPage.drawImage(signatureImage, { x: 90, y: 530, width: 200, height: 200 });
} 

if (installerSignatureBase64 && installerSignatureBase64.startsWith('iVBOR')) {
  const signatureImageBytes1 = Buffer.from(installerSignatureBase64, 'base64');

  // Compress the image using sharp
  const compressedImage = await sharp(signatureImageBytes1)
    .resize({ width: 250, height: 250 }) // Resize if necessary
    .png() // Convert to PNG (or keep it as PNG)
    .toBuffer();

  const InstallersignatureImage = await pdfDoc.embedPng(compressedImage);
  secondPage.drawImage(InstallersignatureImage, { x: 90, y: 730, width: 200, height: 200 });
}


Page2(`${userSlug}`, 1900, height - -1000);

Page2(`${nameInput}`, 1700, height - -930);
Page2(`${Address}`, 1250, height - -930);
Page2(`${City}`, 650, height - -930);
Page2(`${phoneNumber}`, 380, height - -930);
Page2(`${DeviceType}`, 1800, height - -830);
Page2(`${WorkBio}`, 1280, height - -830);
///////////////////////
Page2(`${One1}`, 430, height - -630);
Page2(`${One3}`, 360, height - -435);
Page2(`${One4}`, 360, height - -310);
Page2(`${One5}`, 360, height - -185);
Page2(`${One6}`, 360, height - -90);
Page2(`${One66}`, 360, height - 350);
Page2(`${One8}`, 360, height - 80);
Page2(`${One9}`, 360, height - 170);
Page2(`${One10}`, 360, height - 265);

Page2(`${One33}`, 1610, height - 750);
Page2(`${One1}`, 1790, height - 1205);
Page2(`${One1}`, 1790, height - 995);//// תאריך שוב
Page2(`${installerName}`, 1440, height - 995);
Page2(`${LicenseId}`, 1010, height - 995);
Page2(`${ClientName}`, 1500, height - 1205);

} else if (One24 && One3) {


   // Load the background image
   const imagePath1 = path.join(__dirname, 'images', 'background-1.png');
   const imageBytes1 = fs.readFileSync(imagePath1);
   const backgroundImage1 = await pdfDoc.embedPng(imageBytes1);

  const drawRightAlignedText = (text, x, y, align = 'right') => {
    const fontSize = 16;
    let processedText = reverseNumbersOnly(text);
    const textWidth = customFont.widthOfTextAtSize(processedText, fontSize);
    let textX = x;
    if (align === 'right') {
      textX = x - textWidth; // Align right
    }
    page.drawText(processedText, { x: textX, y: y, size: fontSize, font: customFont, color: rgb(0, 0, 0) });
    
  }

    const page = pdfDoc.addPage([1240, 1854]);
    const { width, height } = page.getSize();

    


  
    page.drawImage(backgroundImage1, {
      x: 0,
      y: 400,
      width: 1240,
      height: 1400,
    });


    if (clientSignatureBase64 && clientSignatureBase64.startsWith('iVBOR')) {
      const signatureImageBytes = Buffer.from(clientSignatureBase64, 'base64');

      // Compress the image using sharp
      const compressedImage = await sharp(signatureImageBytes)
        .resize({ width: 250, height: 250 }) // Resize if necessary
        .png() // Convert to PNG (or keep it as PNG)
        .toBuffer();

      const signatureImage = await pdfDoc.embedPng(compressedImage);
      page.drawImage(signatureImage, { x: 10, y: 530, width: 180, height: 180 });
    } 

    if (installerSignatureBase64 && installerSignatureBase64.startsWith('iVBOR')) {
      const signatureImageBytes1 = Buffer.from(installerSignatureBase64, 'base64');

      // Compress the image using sharp
      const compressedImage = await sharp(signatureImageBytes1)
        .resize({ width: 250, height: 250 }) // Resize if necessary
        .png() // Convert to PNG (or keep it as PNG)
        .toBuffer();

      const InstallersignatureImage = await pdfDoc.embedPng(compressedImage);
      page.drawImage(InstallersignatureImage, { x: 10, y: 350, width: 180, height: 180 });
    }


    drawRightAlignedText(`${userSlug}`, 1190, height - 50);
    drawRightAlignedText(`${nameInput}`, 1100, height - 95);
    drawRightAlignedText(`${Address}`, 850, height - 95);
    drawRightAlignedText(`${City}`, 570, height - 95);
    drawRightAlignedText(`${phoneNumber}`, 435, height - 95);
    drawRightAlignedText(`${DeviceType}`, 1130, height - 160);
    drawRightAlignedText(`${WorkBio}`, 934, height - 158);
   
    drawRightAlignedText(`${One1}`, 720, height - 253);
    drawRightAlignedText(`${One3}`, 715, height - 327);

    drawRightAlignedText(`${One4}`, 715, height - 380);
    drawRightAlignedText(`${One5}`, 715, height - 430);

    drawRightAlignedText(`${One6}`, 715, height - 468);
    drawRightAlignedText(`${One8}`, 707, height - 535);
    drawRightAlignedText(`${One9}`, 707, height - 575);
    drawRightAlignedText(`${One10}`, 707, height - 614);
    drawRightAlignedText(`${One66}`, 715, height - 647);
    drawRightAlignedText(`${One11}`, 400, height - 630);
    drawRightAlignedText(`${One12}`, 440, height - 667);
    drawRightAlignedText(`${One24}`, 115, height - 277);
    drawRightAlignedText(`${One25}`, 115, height - 305);
    drawRightAlignedText(`${One26}`, 115, height - 335);
    drawRightAlignedText(`${One30}`, 435, height - 436);
    drawRightAlignedText(`${One31}`, 425, height - 465);
    
    drawRightAlignedText(`${Device1}`, 540, height - 790);
    drawRightAlignedText(`${Device2}`, 390, height - 790);
    drawRightAlignedText(`${Device3}`, 250, height - 790, 'right');
    drawRightAlignedText(`${Device4}`, 90, height - 790);
    
    drawRightAlignedText(`${Device5}`, 540, height - 819);
    drawRightAlignedText(`${Device6}`, 390, height - 819);
    drawRightAlignedText(`${Device7}`, 250, height - 819, 'right');
    drawRightAlignedText(`${Device8}`, 90, height - 819);
    
    drawRightAlignedText(`${Device9}`, 1160, height - 794);
    drawRightAlignedText(`${Device10}`, 1010, height - 794);
    drawRightAlignedText(`${Device11}`, 870, height - 794, 'right');
    drawRightAlignedText(`${Device12}`, 720, height - 794);
   
    drawRightAlignedText(`${Device13}`, 1160, height - 820);
    drawRightAlignedText(`${Device14}`, 1010, height - 820);
    drawRightAlignedText(`${Device15}`, 870, height - 820, 'right');
    drawRightAlignedText(`${Device16}`, 720, height - 820);

    drawRightAlignedText(`${One18}`, 700, height - 790);
    drawRightAlignedText(`${One19}`, 700, height - 830);
    drawRightAlignedText(`${One20}`, 700, height - 895);
    drawRightAlignedText(`${One21}`, 700, height - 970);
    drawRightAlignedText(`${One22}`, 700, height - 1000);
    drawRightAlignedText(`${One22}`, 700, height - 1040);
    drawRightAlignedText(`${One32}`, 540, height - 900);
    drawRightAlignedText(`${One33}`, 480, height - 1060);
    drawRightAlignedText(`${One1}`, 1120, height - 1195);//// תאריך שוב
    drawRightAlignedText(`${installerName}`, 920, height - 1195);
    drawRightAlignedText(`${LicenseId}`, 630, height - 1195);
    drawRightAlignedText(`${ClientName}`, 930, height - 1365);


  } else if (One24 && !One3) {


     // Load the background image
     const imagePath3 = path.join(__dirname, 'images', 'background-3.png');
     const imageBytes3 = fs.readFileSync(imagePath3);
     const backgroundImage3 = await pdfDoc.embedPng(imageBytes3);

    const Threepage = pdfDoc.addPage([1240, 1854]);
      const { width, height } = Threepage.getSize();
  

    const Page3 = (text, x, y, align = 'right') => {
      const fontSize = 16;
      let processedText = reverseNumbersOnly(text);
      const textWidth = customFont.widthOfTextAtSize(processedText, fontSize);
      let textX = x;
      if (align === 'right') {
        textX = x - textWidth; // Align right
      }
      Threepage.drawText(processedText, { x: textX, y: y, size: fontSize, font: customFont, color: rgb(0, 0, 0) });
      
    }
  
    
    
      Threepage.drawImage(backgroundImage3, {
        x: 0,
        y: 400,
        width: 1240,
        height: 1400,
      });
  
  
      if (clientSignatureBase64 && clientSignatureBase64.startsWith('iVBOR')) {
        const signatureImageBytes3 = Buffer.from(clientSignatureBase64, 'base64');
  
        // Compress the image using sharp
        const compressedImage = await sharp(signatureImageBytes3)
          .resize({ width: 250, height: 250 }) // Resize if necessary
          .png() // Convert to PNG (or keep it as PNG)
          .toBuffer();
  
        const signatureImage = await pdfDoc.embedPng(compressedImage);
        Threepage.drawImage(signatureImage, { x: 10, y: 530, width: 180, height: 180 });
      } 
  
      if (installerSignatureBase64 && installerSignatureBase64.startsWith('iVBOR')) {
        const signatureImageBytes4 = Buffer.from(installerSignatureBase64, 'base64');
  
        // Compress the image using sharp
        const compressedImage = await sharp(signatureImageBytes4)
          .resize({ width: 250, height: 250 }) // Resize if necessary
          .png() // Convert to PNG (or keep it as PNG)
          .toBuffer();
  
        const InstallersignatureImage3 = await pdfDoc.embedPng(compressedImage);
        Threepage.drawImage(InstallersignatureImage3, { x: 10, y: 350, width: 180, height: 180 });
      }

      Page3(`${ClientName}`, 930, height - 1365);

  }



    const pdfBytes = await pdfDoc.save();
     // Convert the PDF to a Base64 string
     const pdfBase64 = Buffer.from(pdfBytes).toString('base64');

    res.contentType("application/pdf");
   res.send(pdfBase64);

  } catch (error) {
    console.error('Error in PDF generation:', error.message);
    res.status(500).send(`Failed to generate PDF: ${error.message}`);
  }
  
});











app.post('/search-license', async (req, res) => {
  const { LicenseId } = req.body;

  try {
    const isAuthorized = await scrapeData(LicenseId);
    res.json({ status: isAuthorized });
  } catch (error) {
    console.error('Error during scraping:', error);
    res.status(500).send('Error during scraping');
  }
});

const puppeteer = require('puppeteer');
const cheerio = require('cheerio');

async function scrapeData(LicenseId) {
  // Convert LicenseId to String, if it's not already

  const browser = await puppeteer.launch({ headless: false, args: ['--no-sandbox'], devtools: false });
  const page = await browser.newPage();

  try {
    await page.goto('https://gassuppliers.energydmz.org/lpgWorker', { waitUntil: 'networkidle0' });

    // Wait for the input field to be visible and interactable
await page.waitForSelector('"body > app-root > app-gpm-worker > div > div.content > div.searchDiv > div:nth-child(1) > div:nth-child(1) > span > input"');
await page.click('"body > app-root > app-gpm-worker > div > div.content > div.searchDiv > div:nth-child(1) > div:nth-child(1) > span > input"');
// Type the LicenseId into the input field
await page.type('"body > app-root > app-gpm-worker > div > div.content > div.searchDiv > div:nth-child(1) > div:nth-child(1) > span > input"', LicenseId);
await page.evaluate((LicenseId) => {
  document.querySelector('"body > app-root > app-gpm-worker > div > div.content > div.searchDiv > div:nth-child(1) > div:nth-child(1) > span > input"').innerText = LicenseId;
}, LicenseId);
    await page.waitForSelector('button.btn-search');
    await page.click('button.btn-search');

    // Wait for a reasonable amount of time for results to load
    await page.waitForTimeout(10000);

    // Get the HTML content of the page
    const content = await page.content();

    // Load the content in Cheerio
    const $ = cheerio.load(content);

    // Extract data using Cheerio
    const status = $('.status.valid').text().trim();
    
    
    // Check if the status contains 'מורשה'
    const isAuthorized = status
    console.log('found')
    return isAuthorized;
    
  } catch (error) {
    console.error('Error:', error);
    return false;
  } finally {
    await browser.close();
  }
}




const port = 3000;
app.listen(port, () => {
  console.log(`Server listening at http://192.168.1.102:${port}`);
});
