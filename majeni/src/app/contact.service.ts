import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Jsonp } from '@angular/http';
@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private http: Http) { }

  sendEmail(name, email, message) {
    const uri = 'http://localhost:3000/contact/send';
    const obj = {
      name: name,
      email: email,
      message: message,
    };
    return this.http.post(uri, obj);
  }
}
