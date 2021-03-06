import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { environment } from '../../environments/environment'

@Injectable({
	providedIn: 'root',
})
export class AuthService {
	private baseUrl: string = environment.baseUrl

	constructor(private httpClient: HttpClient) {}

	login = () => {
		return this.httpClient.get(`${this.baseUrl}`)
	}
}
