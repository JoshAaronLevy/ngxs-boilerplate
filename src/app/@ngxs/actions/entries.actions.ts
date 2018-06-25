export class GetEntries {
  static readonly type = '[ENTRIES] get';
  constructor() { }
}

export class SetCurrentMonth {
  static readonly type = '[DATE] set';
  constructor(public payload: Date) { }
}

