const ROBERTS_COEFFS_1 = [
    [1, 0],
    [0, -1],
  ];
  
  const ROBERTS_COEFFS_2 = [
    [0, 1],
    [-1, 0],
  ];
  
  const PREWITT_COEFFS_1 = [
    [-1, 0, 1],
    [-1, 0, 1],
    [-1, 0, 1],
  ];
  
  const PREWITT_COEFFS_2 = [
    [-1, -1, -1],
    [0, 0, 0],
    [1, 1, 1],
  ];
  
  const SOBEL_COEFFS_1 = [
    [-1, 0, 1],
    [-2, 0, 2],
    [-1, 0, 1],
  ];
  
  const SOBEL_COEFFS_2 = [
    [-1, -2, -1],
    [0, 0, 0],
    [1, 2, 1],
  ];
  
  const SСHARR_COEFFS_1 = [
    [3, 10, 3],
    [0, 0, 0],
    [-3, -10, -3],
  ];
  
  const SCHARR_COEFFS_2 = [
    [3, 0, -3],
    [10, 0, -10],
    [3, 0, -3],
  ];
  
  const COEFF_MATRIX_LAPLACE = [
    [1, 1, 1],
    [1, -8, 1],
    [1, 1, 1],
  ];

module.exports = { ROBERTS_COEFFS_1, ROBERTS_COEFFS_2, PREWITT_COEFFS_1, PREWITT_COEFFS_2, SOBEL_COEFFS_1, SOBEL_COEFFS_2, SСHARR_COEFFS_1, SCHARR_COEFFS_2, COEFF_MATRIX_LAPLACE };