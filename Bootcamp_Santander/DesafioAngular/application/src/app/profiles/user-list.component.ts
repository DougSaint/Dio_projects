import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { catchError, EMPTY, Observable } from "rxjs";
import { User } from "./user";
import { UserService } from "./user.service";


@Component({
	templateUrl:"user-list.component.html"
})

export class UserList implements OnInit{

	constructor(private service: UserService,
		 private router: Router,
		  private route: ActivatedRoute,
		  ) {}

//	users!: User[];

	users$!: Observable<User[]>
	selectedUser!:number
	ngOnInit(): void {
		this.onRefresh();
		this.users$ = this.service.list();
	}



	onEdit(id:number){
		this.router.navigate(['edit', id],{relativeTo: this.route})
	}

	onRefresh() {
		this.users$ = this.service.list().pipe(
			catchError(error => {
			console.error(error);
			return EMPTY;
		  })
		)
	}


	onDelete(userID:number){
		this.selectedUser = userID;
		this.service.delete(this.selectedUser)
		.subscribe({
			next:() => this.onRefresh()})
	}
}
