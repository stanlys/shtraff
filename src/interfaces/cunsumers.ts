interface IBank {
    id: string;
    name: string;
    bik: string;
    account_number: string;
    corr_account_number: string;
    is_default: boolean;
    created_at: string;
    updated_at: string;
}

export interface ICunsumer {
    id: string;
    name: string;
    email: string;
    deferral_days: number;
    org: {
        id: string;
        name: string;
        inn: string;
        kpp: string;
        ogrn: string;
        addr: string;
        bank_accounts: Array<IBank>;
        created_at: string;
        updated_at: string;
    };
    balance: {
        currency: string;
        current_amount: number;
        credit_limit: number;
        available_amount: number;
    };
    metadata: Object;
    created_at: string;
    updated_at: string;
    status: string;
    invoice_prefix: string;
    invoice_emails: Array<string>;
}
// metadata: {
//     additionalProp1: string;
//     additionalProp2: string;
//     additionalProp3: string;
// }
