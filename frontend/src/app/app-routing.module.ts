import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { NotesComponent } from './notes/notes.component';

const routes: Routes = [{
  path: "signup",
  component: RegisterComponent
},
{
  path: "login",
  component: LoginComponent
},
{
  path: "notes",
  component: NotesComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
