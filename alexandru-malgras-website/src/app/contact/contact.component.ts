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
  submitted: boolean = false;

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
    this.sendEmail().subscribe(response => {
      console.log('Email sent successfully!');
      this.contactForm.reset();
    }, error => {
      console.error('Error sending email:', error);
    });
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
}