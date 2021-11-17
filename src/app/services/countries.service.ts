import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class CountriesService {

  constructor(private httpClient: HttpClient) { }

  getCountries() {
    return this.httpClient.get('https://restcountries.com/v3.1/lang/spa')
      .pipe(
        map((data: any) => data.map((country: any) =>
        ({
          name: country.name.common,
          code: country.altSpellings[0]
        })
        ))
      )
  }
}
