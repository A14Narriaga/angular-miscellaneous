import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

interface validateError {
  [s: string]: boolean
}

@Injectable({
  providedIn: 'root'
})

export class ValidatorsService {

  constructor() { }

  noEduardo = (formControl: FormControl): validateError | null =>
    formControl.value?.toLowerCase() === 'eduardo'
      ? { noEduardo: true }
      : null

  comparePasswords = (pass1Name: string, pass2Name: string) => {
    return (formGroup: FormGroup) => {
      const pass1Control = formGroup.controls[pass1Name];
      const pass2Control = formGroup.controls[pass2Name];
      pass1Control.value === pass2Control.value
        ? pass2Control.setErrors(null)
        : pass2Control.setErrors({ equal: true })
    }
  }

  userExist = (formControl: FormControl): Promise<validateError> | Observable<validateError> => !formControl.value
    ? Promise.resolve({})
    : new Promise((res, rej) => {
      setTimeout(() => formControl.value === 'strider'
        ? res({ exist: true })
        : res({}), 3500);
    })

}
