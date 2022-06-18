import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) {}

	ApiUrl ='https://sheet.best/api/sheets/2f91d0dd-cb6a-4ef7-b3dc-7076408a60b8'


	// READ

  getUsers():Observable<User[]>{
	return this.httpClient.get<User[]>(this.ApiUrl)
  }

  // CREATE

  postUser(user:User):Observable<User>{
	return this.httpClient.post<User>(this.ApiUrl, user)
  }

  //Delete

  deleteUser(id: number):Observable<User>{
	return this.httpClient.delete<User>(`${this.ApiUrl}/id/${id}`)
  }

  // UPDATE

  updateUser(id:string, user:User):Observable<User>{
	return this.httpClient.put<User>(`${this.ApiUrl}/id/${id}`, user)
  }

  getUser(id:string):Observable<User[]> {
	return this.httpClient.get<User[]>(`${this.ApiUrl}/id/${id}`)
  }
}
