
export class ResizeViewPort {
    static readonly type = '[APP STATE] resizing viewport';
    constructor(public payload: string) { }
}

export class Navigate {
    static readonly type = '[APP STATE] navigate';
    constructor(public payload: string) { }
}
export class Login {
    static readonly type = '[APP STATE] login';
    constructor(public payload: string) { }
}
export class Logout {
    static readonly type = '[APP STATE] logout';
    constructor() { }
}
