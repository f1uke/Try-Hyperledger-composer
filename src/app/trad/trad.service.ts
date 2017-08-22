import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Commodity } from '../org.acme.mynetwork';
import 'rxjs/Rx';

@Injectable()
export class TradService {

  private NAMESPACE: string = 'Trade';

  constructor(private dataService: DataService<Commodity>) {
  };

  public sendTrade(itemToAdd: any): Observable<Commodity> {
    return this.dataService.send(this.NAMESPACE, itemToAdd);
  }
}
