import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class ContactComponent {
  contactForm: FormGroup;
  submitted = false;
  showNotification = false;

  notificationType: string = '';
  notificationMessage: string = '';

  constructor(private http: HttpClient) {
    this.contactForm = new FormGroup({
      fromName: new FormControl('', [Validators.required]),
      fromEmail: new FormControl('', [Validators.required, Validators.pattern(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)]),
      fromPhoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^\+\d{1,5}\d{9}$/)]),
      text: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.contactForm.valid) {
      this.sendEmail().subscribe(response => {
        console.log('Email sent successfully!');
        this.contactForm.reset();

        this.setNotification('success', 'Email sent successfully!', true);
      }, error => {
        console.error('Error sending email:', error);

        this.setNotification('fail', 'Failed sending the email.', true);
      });
    }
    else {
      this.setNotification('fail', 'Form is invalid.', true);
    }
  }

  sendEmail() {
    const url = 'http://localhost:5000/Email';
    let jsonString = JSON.stringify(this.contactForm.value);
    
    const httpOptions = {
      headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Accept': 'application/json'
      })
    };

    return this.http.post(url, jsonString, httpOptions);
  }

  setNotification(type: string, message: string, isVisible: boolean)
  {
    this.notificationType = type;
    this.notificationMessage = message;
    this.showNotification = isVisible;

    setTimeout(() => {
      this.showNotification = false;
    }, 5000);
  }
}