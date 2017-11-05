import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {

  log(x) {
    console.log(x);
  }

  submitForm(formObject) {
    console.log(formObject);
    let firstName = formObject.value;
    console.log(firstName);
  }
}
