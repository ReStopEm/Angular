import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private client: HttpClient) { }


  firstClick(){
    return console.log('Hello from Service click!!!!')
  }

  getUsers(){
    const apiUrl ='https://reqres.in/api/user';
  return this.client.get(apiUrl);
  }
}
