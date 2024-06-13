// this page controller take and export all the functions about the site 

const catchAsyncErrors = require('../middlewares/catchAsyncErrors')


exports.getHi = catchAsyncErrors((req, res, next) => {
   

    res.status(200).json({
        success: true,
        message: 'hi'
      });
  });