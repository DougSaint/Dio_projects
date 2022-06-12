import { Component, OnInit } from '@angular/core';
import { EmailValidator, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';

@Component({
  selector: 'spa-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

	form!: FormGroup;
 			 constructor(private fb: FormBuilder,
	 		private service: UserService,
			private router: Router,
	  		private route: ActivatedRoute) { }

  ngOnInit(): void {
	//	this.route.params
//		.pipe(
//			map((params:any) => params['id']),
//			switchMap(id => this.service.loadById(id))
//		)
//		.subscribe(
//			(user) => this.updateForm(user))


		const user = this.route.snapshot.data['user'];

			this.form = this.fb.group({
			id:[user.id],
			name: [user.name, [Validators.required]],
			imageUrl: [user.imageUrl, [Validators.required]],
			email: [user.email, [Validators.required]],
			emailJob: [user.emailJob, [Validators.required]],
		});
	}



	submitted = false
	onSubmit() {
		this.submitted = true;

		if (this.form.valid) {
			if(this.form.value.id)
				//update
				this.service.update(this.form.value).subscribe({
					next:() => this.router.navigate(['']),
					error:(err) => console.log(err)
				})
			}else{
				this.service.create(this.form.value).subscribe({
					next:() => this.router.navigate(['']),
					error:(err) => console.log(err)
				})
			}
		}
	}




