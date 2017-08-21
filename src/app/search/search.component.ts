import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import 'rxjs/add/operator/toPromise';


@Component({
	selector: 'app-search',
	templateUrl: './search.component.html',
	styleUrls: ['./search.component.css'],
	providers: [SearchService]
})
export class SearchComponent implements OnInit {

	myForm: FormGroup;

	private allAssets;
	private asset;
	private currentId;
	private errorMessage;

	public result;
	public getText;



	productName = new FormControl("", Validators.required);

	description = new FormControl("", Validators.required);

	quantity = new FormControl("", Validators.required);

	owner = new FormControl("", Validators.required);

	constructor(private serviceCommodity: SearchService, fb: FormBuilder) {
		this.myForm = fb.group({


			productName: this.productName,



			description: this.description,



			quantity: this.quantity,



			owner: this.owner


		});
	}

	ngOnInit(): void {
	}

	letSearch(): Promise<any> {
		let tempList = [];
		return this.serviceCommodity.getSearchByOwner(this.getText)
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

}
