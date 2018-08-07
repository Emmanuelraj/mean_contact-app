import { Component, OnInit } from '@angular/core';

import {ContactModel} from './../contactmodel';

import {ContactService} from './../contact.service';

@Component({
  selector: 'contact-center',
  templateUrl: './contact-center.component.html',
  styleUrls: ['./contact-center.component.css'],
  providers :[ContactService]
})
export class ContactCenterComponent implements OnInit {




add : boolean = false;


/**
contacts : ContactModel[] = [
   {"_id":"1","firstname":"immanuel","lastname":"raj","phoneno":1234}
];*/


contacts:Array<ContactModel>;//for

  constructor(private contactService :ContactService) { }

  ngOnInit()
  {
    console.log('initForm');
    this.contactService.getAllData()
      .subscribe(resContact => this.contacts = resContact);


  }


   selectedContact : ContactModel;


   addButton()
    {
      console.log('add button');
      this.add = true;
    }




    onSelectContact(contact: any)
    {
       this.selectedContact = contact;

       console.log('onSelectContact'+this.selectedContact._id);
    }



    onSubmitAdd(contact)
    {

        console.log('onSubmit add method'+contact)

        this.contactService.addContact(contact)
        .subscribe(resAddNewContact =>
        {
          this.contacts.push(resAddNewContact)
          this.selectedContact = resAddNewContact;
        });
    }


    onUpdateEvent(contact)
     {
       console.log('onUpdateevent')
       this.contactService.editContact(contact)
        .subscribe(resEditContact =>contact = resEditContact);
        this.selectedContact = null;
     }


onDeleteEvent(contact)
{
  console.log('delete event method')

  let contactArray = this.contacts;

this.contactService.deleteContact(contact)
  .subscribe(resDeleteContact =>
   {
     for(var i=0;i<contactArray.length;i++)
      {
        if(contactArray[i]._id=== contact._id)
         {
           contactArray.splice(i,1);
         }
      }
   })
}







}
