import { Injectable } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs/Observable';
import { Commodity } from '../org.acme.mynetwork';
import 'rxjs/Rx';

@Injectable()
export class TransectionService {

  private NAMESPACE: string = 'system/transactions';

  constructor(private dataService: DataService<Commodity>) { }

  public getAll(): Observable<Commodity[]> {
    return this.dataService.getAll(this.NAMESPACE);
  }

}
