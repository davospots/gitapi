import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';



@Injectable({
  providedIn: 'root'
})
export class GithubService {

  constructor( private httpClient:HttpClient) { }

  //for github profile
  private clientId = '261c57dd09d86e551634';
  private clientSecret = '4988c78a580003446592b90dca59802b626521d1';


  public getProfile(searchQuery: any){
    let dataURL = `https://api.github.com/users/${searchQuery} ? client_id=${this.clientId} & client_secret = ${this.clientSecret}`;
    
    
  }
}


