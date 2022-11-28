import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.scss']
})
export class FormulaireComponent implements OnInit {

  contactForm!: FormGroup;
  contactFormValid = true;

  constructor(
    private formBuilder:FormBuilder
  ) { }

  ngOnInit(): void {
    this.initContactForm ()
  }

  initContactForm ():void {
    this.contactForm = this.formBuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required,Validators.email]],
      message: ['',[ Validators.required,Validators.minLength(50),Validators.maxLength(600)]]

    })
  }

  onSubmitContactForm(): void {
    if (this.contactForm.invalid){
      this.contactFormValid = true;
    }else {
      this.contactFormValid = false;
    }
  }
}
