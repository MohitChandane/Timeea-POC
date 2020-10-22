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
}
