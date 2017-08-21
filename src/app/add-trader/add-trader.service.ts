import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Commodity } from '../org.acme.mynetwork';
import 'rxjs/Rx';

@Injectable()
export class AddTraderService {

  private NAMESPACE: string = 'Trader';

  constructor(private dataService: DataService<Commodity>) {
  };

  public getSearchTrader(): Observable<Commodity[]> {
    return this.dataService.searchTrader(this.NAMESPACE);
  }

  public addAsset(itemToAdd: any): Observable<Commodity> {
    return this.dataService.addTrader(this.NAMESPACE, itemToAdd);
  }

  public deleteAsset(id: any): Observable<Commodity> {
    return this.dataService.delete(this.NAMESPACE, id);
  }

  public getAsset(id: any): Observable<Commodity> {
    return this.dataService.getSingle(this.NAMESPACE, id);
  }

}
