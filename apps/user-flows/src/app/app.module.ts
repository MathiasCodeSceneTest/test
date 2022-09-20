import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { KirbyModule } from '@kirbydesign/designsystem';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranactionDetailsAccountComponent } from './transaction-details-flow/tranaction-details-account/tranaction-details-account.component';
import { TransactionDetailsFlowComponent } from './transaction-details-flow/transaction-details-flow.component';
import { TransactionDetailsForyouComponent } from './transaction-details-flow/transaction-details-foryou/transaction-details-foryou.component';
import { TransactionDetailsComponent } from './transaction-details-flow/transaction-details/transaction-details.component';
import { TransactionsComponent } from './transaction-details-flow/transactions/transactions.component';

@NgModule({
  declarations: [
    AppComponent,
    TransactionDetailsFlowComponent,
    TransactionDetailsForyouComponent,
    TranactionDetailsAccountComponent,
    TransactionsComponent,
    TransactionDetailsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, KirbyModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
