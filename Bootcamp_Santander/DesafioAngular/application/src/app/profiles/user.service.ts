import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs';

@Injectable({
    providedIn: 'root'
})


export class UserService {

private readonly API ='http://localhost:3000/users'

    constructor(private http: HttpClient) { }

    list() {
		return this.http.get<User[]>(this.API)
	}

	loadById(id:any){
		return this.http.get<User>(`${this.API}/${id}`).pipe(take(1))
	}

	create(user:User){
		return this.http.post(this.API, user).pipe(take(1))
	}

	update(user:User){
		return this.http.put(`${this.API}/${user.id}`,user).pipe(take(1));
	}
	delete(id:number){
		return this.http.delete(`${this.API}/${id}`).pipe(take(1))
	}
}
