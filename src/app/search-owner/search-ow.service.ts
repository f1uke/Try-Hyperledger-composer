import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Commodity } from '../org.acme.mynetwork';
import 'rxjs/Rx';


@Injectable()
export class SearchOWService {

private NAMESPACE: string = 'Trader';

  constructor(private dataService: DataService<Commodity>) {
  };

  public getSearchTrader(): Observable<Commodity[]> {
    return this.dataService.searchTrader(this.NAMESPACE);
  }

}
