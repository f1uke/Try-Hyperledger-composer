import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { TransectionService } from './transection.service';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-transection',
  templateUrl: './transection.component.html',
  styleUrls: ['./transection.component.css'],
  providers: [TransectionService]
})
export class TransectionComponent implements OnInit {

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
  private errorMessage;

  productName = new FormControl("", Validators.required);

  description = new FormControl("", Validators.required);

  quantity = new FormControl("", Validators.required);

  owner = new FormControl("", Validators.required);

  constructor(private serviceCommodity: TransectionService, fb: FormBuilder) {
    this.myForm = fb.group({


      productName: this.productName,



      description: this.description,



      quantity: this.quantity,



      owner: this.owner


    });
  }

  ngOnInit(): void {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceCommodity.getAll()
      .toPromise()
      .then((result) => {
        this.errorMessage = null;
        result.forEach(asset => {
          tempList.push(asset);
        });
        this.allAssets = tempList;
      })
      .catch((error) => {
        if (error == 'Server error') {
          this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else if (error == '404 - Not Found') {
          this.errorMessage = "404 - Could not find API route. Please check your available APIs."
        }
        else {
          this.errorMessage = error;
        }
      });
  }


}
