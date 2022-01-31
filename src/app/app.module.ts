import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { PaymentComponent } from './payment/payment.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { BankingComponent } from './banking/banking.component';
import { CheckBalanceComponent } from './check-balance/check-balance.component';
import { FormsModule } from '@angular/forms';
import { ReactiveComponent } from './reactive/reactive.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    PaymentComponent,
    AddAccountComponent,
    BankingComponent,
    CheckBalanceComponent,
    ReactiveComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
