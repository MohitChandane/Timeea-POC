export class Constants {
   public static UserDetailsForm = {
      creditCardNumber: 'Credit card number',
      securityCode: 'Security code',
      amount: 'Amount',
      expirationDate: 'Expiration date',
      cardHolder: 'Card holder name'
   };

   public static warningMessages = {
      validCardNumber: 'Please enter valid card number.',
      validSecCode: 'Please enter valid security code.',
      validAmount: 'Please enter valid amount.',
      validExpiry: 'Please enter valid expiry date.',
      validCardHolder: 'Please enter valid card holder name.',
   };

   public static generalRegEx = {
      onlyNumeric: '^[0-9]*$',
      onlyAphabets: '^[A-Za-z]+$',
      greaterThanZero: '^[1-9]*$'
   };

   public static landingPageLables = {
      creditGuidelines: 'Credit card guidelines.',
      creditCardHandy: 'Please make sure you have credit card handy in order to fill the following fields.',
      cardNumber: 'Credit card number.',
      cardHolderName: 'Card holders name.',
      expiryDate: 'Expiry date of credit card.',
      securityCode: 'Security code (3 digit number at back of your card).',
      enterCardDetails: 'Enter card details',
      creditCardInfo: 'Credit card info'
   };
}
