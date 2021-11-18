import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ValidatorsService } from '../../../services/validators.service';

@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.sass']
})
export class FormReactiveComponent implements OnInit {

  formGroup!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private validatorsService: ValidatorsService
  ) {
    this.createForm();
    this.setFormData();
    this.setFormListeners();
  }

  ngOnInit(): void {

  }

  createForm = () => {
    this.formGroup = this.formBuilder.group({
      username: ['',
        Validators.required,
        this.validatorsService.userExist
      ],
      name: ['', [
        Validators.required,
        Validators.minLength(3),
        this.validatorsService.noEduardo
      ]],
      email: ['', [
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')
      ]],
      address: this.formBuilder.group({
        street: ['', Validators.required],
        number: ['', Validators.required]
      }),
      hobbies: this.formBuilder.array([]),
      pass1: ['', Validators.required],
      pass2: ['', Validators.required]
    }, {
      validators: this.validatorsService.comparePasswords('pass1', 'pass2')
    })
  }

  setFormData = () => {
    this.formGroup.reset({
      username: 'A14N',
      name: 'Alan',
      email: 'a14n.arriaga@gmail.com',
      address: {
        street: 'tuy',
        number: 39
      }
    })
  }

  setFormListeners = () => {
    this.formGroup.valueChanges.subscribe(value => {
      console.log(value);
    })
    this.formGroup.statusChanges.subscribe(status => {
      console.log(status);
    })
    this.formGroup.get('name')?.valueChanges.subscribe(
      console.log
    )
  }

  get hobbies() {
    return this.formGroup.get('hobbies') as FormArray
  }

  addHobbie = () => this.hobbies.push(
    this.formBuilder.control('', Validators.required)
  )

  deleteHobbie = (id: number) => this.hobbies.removeAt(id)

  validField = (name: string): boolean => {
    const valid = this.formGroup.get(name)?.invalid && this.formGroup.get(name)?.touched;
    return valid !== undefined ? valid : false;
  }

  check = () => {
    if (this.formGroup.invalid) {
      Object.values(this.formGroup.controls).forEach(control => {
        if (control instanceof FormGroup) {
          Object.values(control.controls).forEach(control =>
            control.markAsTouched())
        }
        else control.markAsTouched()
      })
    }
  }

  save = () => {
    this.formGroup.reset({
      name: '',
      email: '',
      address: {
        street: '',
        number: ''
      }
    })
  }

}
