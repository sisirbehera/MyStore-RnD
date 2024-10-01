import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExteranlHttpService {

  constructor(private httpClient: HttpClient) { }

  fetchResults(searchTerm: string) {
    // searchTerm = 'restaurants near me';
    // const url = "https://www.searchapi.io/api/v1/search";
    // const params = {
    //  "engine": "google",
    //  "q": searchTerm,
    //  "location": "Pune,India",
    //  "api_key": "secret_api_key"
    // };
    // return this.httpClient.get(url, {params})
    return this.httpClient.get(`https://api.example.com/search?q=${searchTerm}`)
  }
}
