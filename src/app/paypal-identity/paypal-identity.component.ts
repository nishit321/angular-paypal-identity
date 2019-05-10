import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paypal-identity',
  templateUrl: './paypal-identity.component.html',
  styleUrls: ['./paypal-identity.component.css']
})
export class PaypalIdentityComponent implements OnInit {

loadAPI: Promise<any>;
	constructor(private route: ActivatedRoute) {}

	ngOnInit() {
		this.loadExternalScript('https://www.paypalobjects.com/js/external/connect/api.js').then(() => {
			const windowRef: any = window;
			console.log('windowRef', windowRef.paypal);
			windowRef.paypal.use([ 'login' ], function(login) {
				login.render({
					appid: 'AQdSGiwwbkBYeHQrkEHGPgXU_xCj3qebgn0x1Vf0jC49cowAbTZE1xlxGukvn-jDty4SsN7ocNd6Lq6X',
					authend: 'sandbox',
					scopes: 'email',
					containerid: 'lippButton',
					locale: 'en-us',
					fullPage: 'false',
					responseType: 'code',
					buttonType: 'CWP',
					buttonShape: 'pill',
					buttonSize: 'lg',
					returnurl: 'http://localhost:4200/paypal-identity'
				});
			});
		});
	}
	private loadExternalScript(scriptUrl: string) {
		return new Promise((resolve, reject) => {
			const scriptElement = document.createElement('script');
			scriptElement.src = scriptUrl;
			scriptElement.onload = resolve;
			document.body.appendChild(scriptElement);
		});
	}

}