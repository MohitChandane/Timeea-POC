import { Constants } from './core/utils/constants';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
   title = 'front-end-test';
   hideBtn: boolean;
   labels = Constants.landingPageLables;
   ngOnInit() {
      this.hideBtn = false;
   }
   constructor(private router: Router) { }
   onClick() {
      this.hideBtn = true;
      this.router.navigateByUrl('credit-card-dashboard');
   }
}
