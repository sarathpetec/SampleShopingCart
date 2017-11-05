import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  contactMethods = [
    {id: 1, name: 'email'},
    {id: 2, name: 'phone'}
    ];

  log(x) {
    console.log(x);
  }

  submitForm(formObject) {
    console.log(formObject);
    let firstName = formObject.value;
    console.log(firstName);
  }
}
