const { createCanvas, loadImage } = require('canvas');
const { writeFileSync } = require('fs');
const path = require('path');
const { openCV } = require('../openCV');
const { ROBERTS_COEFFS_1
  , ROBERTS_COEFFS_2
  , PREWITT_COEFFS_1
  , PREWITT_COEFFS_2
  , SOBEL_COEFFS_1
  , SOBEL_COEFFS_2
  , SСHARR_COEFFS_1
  , SCHARR_COEFFS_2
} = require('../lab4/models');
const { applyOperator, applyLaplass } = require('../lab4/extentions');

(async () => {
  await openCV();
  const image = await loadImage(path.join(__dirname, '/black-white-running-horse.png'));
  const src = cv.imread(image);
  let gray = new cv.Mat();
  cv.cvtColor(src, gray, cv.COLOR_RGBA2GRAY, 0);
  const canvasGray = createCanvas(image.width, image.height);
  cv.imshow(canvasGray, gray);
  writeFileSync('output-gray.png', canvasGray.toBuffer('image/png'));

  let blurred = new cv.Mat();
  let ksize = new cv.Size(5, 5);
  cv.GaussianBlur(gray, blurred, ksize, 3);
  const canvasBlurred = createCanvas(image.width, image.height);
  cv.imshow(canvasBlurred, blurred);
  writeFileSync('output-blurred.png', canvasBlurred.toBuffer('image/png'));

  applyOperator(blurred, ROBERTS_COEFFS_1, ROBERTS_COEFFS_2, 'roberts', 10);
  applyOperator(blurred, SOBEL_COEFFS_1, SOBEL_COEFFS_2, 'sobel', 90);
  applyOperator(blurred, PREWITT_COEFFS_1, PREWITT_COEFFS_2, 'prewitt', 50);
  applyOperator(blurred, SСHARR_COEFFS_1, SCHARR_COEFFS_2, 'scharr', 90);
  applyLaplass(blurred);

  let canny = new cv.Mat();
  cv.Canny(blurred, canny, 100, 200);
  const canvasCanny = createCanvas(image.width, image.height);
  cv.imshow(canvasCanny, canny);
  writeFileSync('output-operator-canny.png', canvasCanny.toBuffer('image/png'));

  src.delete();
  blurred.delete();
  gray.delete();
  canny.delete();
})();