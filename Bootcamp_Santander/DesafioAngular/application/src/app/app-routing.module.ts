import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { User } from './profiles/user';
import { UserList } from './profiles/user-list.component';
import { UserFormComponent } from './profiles/user-form/user-form.component';
import { UserResolverGuard } from './profiles/guard/user-resolve.guard';

const routes: Routes = [
	{
		path: '',
		component: UserList
	},
	{
		path:'new', component: UserFormComponent, resolve:{user: UserResolverGuard}
	},
	{
		path:'edit/:id', component: UserFormComponent,resolve:{user: UserResolverGuard}
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
