import { Component, OnInit } from '@angular/core';
import { TradService } from './trad.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-trad',
  templateUrl: './trad.component.html',
  styleUrls: ['./trad.component.css'],
  providers: [TradService]
})
export class TradComponent implements OnInit {

  public date = new Date();

  myForm: FormGroup;

  private allAssets;
  private asset;
  private currentId;
  private errorMessage;

  public result;


  productName = new FormControl("", Validators.required);

  description = new FormControl("", Validators.required);

  quantity = new FormControl("", Validators.required);

  owner = new FormControl("", Validators.required);

  constructor(private serviceCommodity: TradService, fb: FormBuilder) {
    this.myForm = fb.group({


      productName: this.productName,



      description: this.description,



      quantity: this.quantity,



      owner: this.owner


    });
  }

  ngOnInit() {
    console.log(this.date);
  }

  addAsset(form: any): Promise<any> {

    this.asset = {
      $class: "org.acme.mynetwork.Trade",


      "commodity": this.productName.value,



      "newOwner": this.description.value,



      "transactionId": '',



      "timestamp": this.date


    };
    console.log(this.asset);

    this.myForm.setValue({


      "productName": null,



      "description": null,



      "quantity": null,



      "owner": null


    });

    return this.serviceCommodity.sendTrade(this.asset)
      .toPromise()
      .then(() => {
        this.errorMessage = null;
        this.myForm.setValue({


          "productName": null,



          "description": null,



          "quantity": null,



          "owner": null


        });
      })
      .catch((error) => {
        if (error == 'Server error') {
          this.errorMessage = "Could not connect to REST server. Please check your configuration details";
        }
        else {
          this.errorMessage = error;
        }
      });
  }

  resetForm(): void {
    this.myForm.setValue({


      "productName": null,



      "description": null,



      "quantity": null,



      "owner": null


    });
  }

}
