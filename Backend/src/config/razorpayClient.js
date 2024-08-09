const Razorpay = require('razorpay');

apiKey="rzp_test_wKhkagasI32sc7"
apiSecret="CSAE6UxlLvzp80tzy8iDtHPc"


const razorpay = new Razorpay({
    key_id: apiKey,
    key_secret: apiSecret,
  });


  module.exports=razorpay;