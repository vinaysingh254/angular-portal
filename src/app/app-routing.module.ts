import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { KmsFormContainerComponent } from './containers/kms-form-container.component';
import { AuthGuard } from './guards/auth-guard';
import { LoginComponent } from './components/common/login.component';
import { RegisterComponent } from './components/common/register.component';


const routes: Routes = [
  { path: '', component: KmsFormContainerComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent  },
   // otherwise redirect to home
   { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
