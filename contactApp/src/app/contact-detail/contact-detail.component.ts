import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {

  constructor() { }

  @Input() contact;


  @Output() UpdateEvent = new EventEmitter();


  @Output() DeleteEvent = new EventEmitter();

  ngOnInit()
  {

  }



  editButton()
  {
    console.log('edit function')
    this.UpdateEvent.emit(this.contact);

    alert('edited sucessfully')
  }


  deleteButton()
  {
    console.log('deleteButton');
    this.DeleteEvent.emit(this.contact);
    alert('delete sucessfully')
  }

}
