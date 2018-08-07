module.exports = function (app)
{


  const Contact = require('../models/contact');

  app.post('/api/addContact', function (request,response)
  {
      console.log('add contact method');

       new Contact({
           firstname : request.body.firstname,
           lastname:   request.body.lastname,
           phoneno:    request.body.phoneno
       }).save(function(err)
       {
          if(err)
           {
             console.log('error on insert method of db'+err);
           }
           else
            {
             response.send('insertedContact');
            }
       });

  });



  //fetch all collections from db
  app.get('/api/allContact',function(request,response)
  {
     console.log('find all method');
      Contact.find({},function (err,contacts)
      {
         if(err)
         {
           console.log('error on fetching the data'+err);
         }
         else
         {
           response.json(contacts);
         }

      })
  });


//fetch one data
app.get('/api/contact/:id',function(request,response)
{
  console.log('fetch by id');

   Contact.findById({_id:request.params.id},function (err,contact)
   {
         if(err)
           {
             console.log('error on db'+err);
           }
           else {
             response.json(contact);
           }
   });

})




//editById
app.put('/api/editContact/:id',function(request,response)
{
  console.log('edit contact  method');
  Contact.findByIdAndUpdate({_id:request.params.id},
    {
     $set:{
       firstname : request.body.firstname,
       lastname:   request.body.lastname,
       phoneno:    request.body.phoneno

     }},
     {
       new : true
     },

     function (err, updateContact)
     {
         if(err)
          {
            console.log('err on '+err);
          }
          else {
            response.json(updateContact);
          }
     })

});




//deleteById
app.delete('/api/deleteContact/:id',function (request,response)
{
   console.log('deleteContactById');

    Contact.remove({_id:request.params.id},function(err, deleteContact)
    {

       if(err)
        {
          console.log('erron remove By Id'+err);
        }
        else
        {
          response.send('deleteContact');
        }
    });
});





}
