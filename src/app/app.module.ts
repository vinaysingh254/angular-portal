import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/common/header/header.component';
import { NavbarComponent } from './components/common/header/navbar.component';
import { FooterComponent } from './components/common/footer/footer.component';
import { KmsFormContainerComponent } from './containers/kms-form-container.component';
import { JwtInterceptor } from './_helpers/jwt-interceptor';
import { ErrorInterceptor } from './_helpers/error-interceptor';
import { FakeBackendInterceptor, fakeBackendProvider } from './_helpers/fake-backend-interceptor';
import { AlertComponent } from './components/common/alert.component';
import { LoginComponent } from './components/common/login.component';
import { RegisterComponent } from './components/common/register.component';
import { ReactiveFormsModule }    from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    FooterComponent,
    KmsFormContainerComponent,
    AlertComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
     // provider used to create fake backend
     fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
