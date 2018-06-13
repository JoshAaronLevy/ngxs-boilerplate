import { IFilter } from '../model/data.objects';

export class DoFilter {
    static readonly type = '[FILTERS] do filter';
    constructor(public payload: IFilter[]) { }
}

export class AddFilter {
    static readonly type = '[FILTERS] add filter';
    constructor(public payload: IFilter) { }
}

export class RemoveFilter {
    static readonly type = '[FILTERS] remove filter';
    constructor(public payload: IFilter) { }
}
