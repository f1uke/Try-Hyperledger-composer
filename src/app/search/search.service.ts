import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Commodity } from '../org.acme.mynetwork';
import 'rxjs/Rx';

@Injectable()
export class SearchService {

  private NAMESPACE: string = 'queries/selectCommoditiesByOwner';

  constructor(private dataService: DataService<Commodity>) {
  };

  public getSearchByOwner(owner: any): Observable<Commodity[]> {
    return this.dataService.queryData(this.NAMESPACE, owner);
  }

}
