import { Component, OnInit } from '@angular/core';
import { AddTraderService } from './add-trader.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-add-trader',
  templateUrl: './add-trader.component.html',
  styleUrls: ['./add-trader.component.css'],
  providers: [AddTraderService]
})
export class AddTraderComponent implements OnInit {

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

  constructor(private serviceCommodity: AddTraderService, fb: FormBuilder) {

    this.myForm = fb.group({


      productName: this.productName,



      description: this.description,



      quantity: this.quantity,



      owner: this.owner


    });
  }

  ngOnInit() {
    this.loadAll();
  }

  loadAll(): Promise<any> {
    let tempList = [];
    return this.serviceCommodity.getSearchTrader()
      .toPromise()
      .then((result) => {
        this.result = result;
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


  // *******************************************************************************


  addAsset(form: any): Promise<any> {

    this.asset = {
      $class: "org.acme.mynetwork.Trader",


      "tradeId": this.productName.value,



      "firstName": this.description.value,



      "lastName": this.quantity.value,



      "owner": this.owner.value


    };

    this.myForm.setValue({


      "productName": null,



      "description": null,



      "quantity": null,



      "owner": null


    });

    return this.serviceCommodity.addAsset(this.asset)
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


  // updateAsset(form: any): Promise<any> {
  //   this.asset = {
  //     $class: "org.acme.mynetwork.Commodity",







  //     "description": this.description.value,





  //     "quantity": this.quantity.value,





  //     "owner": this.owner.value



  //   };

  //   return this.serviceCommodity.updateAsset(form.get("productName").value, this.asset)
  //     .toPromise()
  //     .then(() => {
  //       this.errorMessage = null;
  //     })
  //     .catch((error) => {
  //       if (error == 'Server error') {
  //         this.errorMessage = "Could not connect to REST server. Please check your configuration details";
  //       }
  //       else if (error == '404 - Not Found') {
  //         this.errorMessage = "404 - Could not find API route. Please check your available APIs."
  //       }
  //       else {
  //         this.errorMessage = error;
  //       }
  //     });
  // }


  deleteAsset(): Promise<any> {

    return this.serviceCommodity.deleteAsset(this.currentId)
      .toPromise()
      .then(() => {
        this.errorMessage = null;
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

  setId(id: any): void {
    this.currentId = id;
  }

  getForm(id: any): Promise<any> {

    return this.serviceCommodity.getAsset(id)
      .toPromise()
      .then((result) => {
        this.errorMessage = null;
        let formObject = {


          "productName": null,



          "description": null,



          "quantity": null,



          "owner": null


        };




        if (result.productName) {
          formObject.productName = result.productName;
        } else {
          formObject.productName = null;
        }

        if (result.description) {
          formObject.description = result.description;
        } else {
          formObject.description = null;
        }

        if (result.quantity) {
          formObject.quantity = result.quantity;
        } else {
          formObject.quantity = null;
        }

        if (result.owner) {
          formObject.owner = result.owner;
        } else {
          formObject.owner = null;
        }


        this.myForm.setValue(formObject);

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

  resetForm(): void {
    this.myForm.setValue({


      "productName": null,



      "description": null,



      "quantity": null,



      "owner": null


    });
  }

}
