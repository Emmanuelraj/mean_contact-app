const mongoose = require('mongoose');





var mongooseSchema  =new mongoose.Schema({

  firstname :{
         type:String,
         required: true
  },
  lastname:{
    type:String,
    required: true
  },

 phoneno :{
   type : Number,
   required: true
 }


});



module.exports  = mongoose.model('contact',mongooseSchema);
