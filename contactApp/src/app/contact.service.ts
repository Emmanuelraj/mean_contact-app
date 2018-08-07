import { Injectable } from '@angular/core';

import {Http,Response,Headers,RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/map'

@Injectable()
export class ContactService {

  constructor(private http:Http)
  {

   }

private _getUrl ='/api/allContact';



private _postUrl = '/api/addContact';


private _putUrl ='/api/editContact/';


private _deleteUrl='/api/deleteContact/'




getAllData()
{
  return this.http.get(this._getUrl)
    .map((response:Response) => response.json());
}




addContact(contact)
{
  let headers = new Headers({'Content-type':'application/json'})
  let options = new RequestOptions({headers: headers});
  return this.http.post(this._postUrl,JSON.stringify(contact),options)
   .map((response:Response) => response.json());
}


editContact(contact)
{

  let headers = new Headers({'Content-type':'application/json'})
  let options = new RequestOptions({headers: headers});
  return this.http.put(this._putUrl+contact._id,JSON.stringify(contact),options)
   .map((response:Response) => response.json());


}


deleteContact(contact)
{
return this.http.delete(this._deleteUrl+contact._id)
   .map((response:Response) => response.json());

}




}
