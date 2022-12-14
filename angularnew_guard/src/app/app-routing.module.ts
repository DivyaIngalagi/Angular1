import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AuthGuard } from './auth.guard';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [

  {path:'users',pathMatch:'full',component:UserComponent,canActivate:[AuthGuard]},//this is guardexample//apply the guards on route here//we can have multiple guard which we want to execute before activating this route bcoz it is array
  {path:'about',component:AboutComponent},
  {path:'contact',component:ContactComponent},
  {path:'**',redirectTo:'users'}//otherwise it will go directly to app.component.html
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


