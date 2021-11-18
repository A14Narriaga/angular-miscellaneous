import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CountriesService } from '../../../services/countries.service';

@Component({
  selector: 'app-form-template',
  templateUrl: './form-template.component.html',
  styleUrls: ['./form-template.component.sass']
})
export class FormTemplateComponent implements OnInit {

  user = {
    name: 'Alan Arriaga',
    email: 'a14n.arriaga@gmail.com',
    country: 'MX',
    gender: 'M'
  }

  countries: any[] = []

  constructor(
    private countriesService: CountriesService
  ) { }

  ngOnInit(): void {
    this.countriesService.getCountries()
      .subscribe(countries => {
        this.countries = countries
        this.countries.unshift({
          name: 'Select a country...',
          code: ''
        })
      }
      )
  }

  saveFormTemp = (form: NgForm) => {
    if (form.invalid) {
      Object.values(form.controls).forEach(control =>
        control.markAsTouched())
    }
  }

}
