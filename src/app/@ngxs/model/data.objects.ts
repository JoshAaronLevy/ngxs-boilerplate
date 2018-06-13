export interface IFileObject {
    name: string;
    path: string;
    id: number;
    short: string;
    modified: string;
    errors: string[];
    content: string;
    charset: ICharset;
    headerFound?: number;
    entries: IEntry[];
    validFormat: boolean;
    account?: string;
}

export interface IEntry {
    date: string;
    description: string;
    id: number;
    value: number;
    account: string;
}

export interface ICharset {
    encoding: string;
    confidence: number;
}

export interface ISummary {
    balance: number;
    date: Date;
}

export interface IAccount {
    name: string;
    short: string;
    imagePath: string;
}

export interface IFilter {
    account: IAccount;
    year: number;
    month: number;
    doFilter(): IEntry[];
}


