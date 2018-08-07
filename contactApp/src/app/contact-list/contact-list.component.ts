import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {


@Input() contacts;

@Output() selectedContact= new EventEmitter();

  constructor() { }

  ngOnInit() {
  }


onSelectContact(contact:any)
{
  console.log('onSelectContact'+contact.id);
  this.selectedContact.emit(contact);
}


}
