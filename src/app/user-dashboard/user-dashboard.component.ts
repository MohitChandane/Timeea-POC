import { PaymentService } from '../core/servcies/payment.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Constants } from '../core/utils/constants';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
   selector: 'app-user-dashboard',
   templateUrl: './user-dashboard.component.html',
   styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit, OnDestroy {
   cardDetailsForm: FormGroup;
   public loginForm: FormGroup;
   public todaysDate = new Date();
   labels = Constants.UserDetailsForm;
   warningLables = Constants.warningMessages;
   regEx = Constants.generalRegEx;
   paymentSubscription: Subscription;
   public isSubmitClicked: boolean;
   hideForm: boolean;
   hideSuccessMsg: boolean;
   constructor(private fb: FormBuilder, private paymentService: PaymentService) { }

   ngOnInit() {
      this.initRegisterForm();
   }
   initRegisterForm() {
      this.cardDetailsForm = this.fb.group({
         creditCardNumber: ['', [Validators.required, Validators.pattern(this.regEx.onlyNumeric)]],
         cardHolder: ['', [Validators.required, Validators.pattern(this.regEx.onlyAphabets)]],
         expirationDate: ['', Validators.required],
         securityCode: ['', Validators.pattern(this.regEx.onlyNumeric)],
         amount: ['', [Validators.required, Validators.pattern(this.regEx.greaterThanZero)]]
      });
   }

   onClickSubmit() {
      this.isSubmitClicked = true;
      const formValues = this.cardDetailsForm.value;
      const postObj = {
         creditCardNumber: formValues.creditCardNumber,
         cardHolder: formValues.cardHolder,
         expirationDate: formValues.expirationDate,
         securityCode: formValues.securityCode,
         amount: formValues.amount
      };
      if (this.cardDetailsForm.valid) {
         this.paymentSubscription = this.paymentService.postUserDetails(postObj).subscribe((res) => {
            if (res) {
               this.hideSuccessMsg = true;
               this.cardDetailsForm.reset();
               this.isSubmitClicked = false;
            }
         });
      }
   }
   ngOnDestroy() {
      if (this.paymentSubscription) {
         this.paymentSubscription.unsubscribe();
      }
   }
   onClickClose() {
      this.hideSuccessMsg = false;
   }
}
