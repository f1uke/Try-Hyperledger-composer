import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { TransactionComponent } from './Transaction/Transaction.component'
import { HomeComponent } from './home/home.component';

import { CommodityComponent } from './Commodity/Commodity.component';
import { SearchComponent } from './search/search.component';
import { SearchOwnerComponent } from './search-owner/search-owner.component';
import { AddTraderComponent } from './add-trader/add-trader.component';
import { TradComponent } from './trad/trad.component';
import { TransectionComponent } from './transection/transection.component';

const routes: Routes = [
  // { path: 'transaction', component: TransactionComponent },
  { path: '', component: HomeComponent },

  { path: 'Commodity', component: CommodityComponent },

  { path: 'Search', component: SearchComponent },

  { path: 'SearchTrader', component: SearchOwnerComponent },

  { path: 'addTrader', component: AddTraderComponent },

  { path: 'Trad', component: TradComponent },

  { path: 'Transec', component: TransectionComponent },
  
  { path: '**', redirectTo: '' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
