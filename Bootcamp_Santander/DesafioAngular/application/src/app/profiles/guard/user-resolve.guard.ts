import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Resolve, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable, of } from "rxjs";
import { User } from "../user";
import { UserService } from "../user.service";


@Injectable({
	providedIn:'root'
})

export class UserResolverGuard implements Resolve<User> {
	constructor(private service: UserService){}

	resolve(route: ActivatedRouteSnapshot,
		 state: RouterStateSnapshot): Observable<User> | Promise<User> {
			if(route.params && route.params['id']){
				return this.service.loadById(route.params['id'])
			}return of({
				id:0,
				name:'',
				imageUrl:'',
				email:'',
				emailJob:''
			});
	}

}
