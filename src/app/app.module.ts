import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { PaypalIdentityComponent } from './paypal-identity/paypal-identity.component';
const appRoutes: Routes = [
  { path: 'paypal', component: PaypalIdentityComponent },
  { path: '', component: HomeComponent },

];
@NgModule({
  imports:      [ BrowserModule, FormsModule,RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ) ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, PaypalIdentityComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
