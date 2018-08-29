import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../contact.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FlashMessagesModule, FlashMessagesService } from 'angular2-flash-messages';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  angForm: FormGroup;
  constructor(
    private flashMessages: FlashMessagesService,
    private fb: FormBuilder,
    private contactService: ContactService) {
    this.createForm();
  }

  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }
  sendMail(name, email, message) {
    this.contactService.sendEmail(name, email, message).subscribe(success => {
      this.flashMessages.show('You are data we succesfully submitted', { cssClass: 'alert-success', timeout: 3000 });
    }, error => {
      this.flashMessages.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
    });
  }
  ngOnInit() {
  }

}
