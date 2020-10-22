export interface IUserDetails {
    creditCardNumber?: string;
    cardholder?: string;
    expirationDate?: Date;
    securityCode?: string;
    amount?: number;
}

export interface IUserPostSuccess {
    status?: string;
}
