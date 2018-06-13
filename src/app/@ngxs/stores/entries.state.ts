import { Action, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { EntryService } from '../../services/entry.service';
import { GetEntries } from '../actions/entries.actions';
import { IEntry } from '../model/data.objects';

export interface IEntriesStateModel {
  entries: IEntry[];
}

@State<IEntriesStateModel>({
  name: 'entriesState',
  defaults: {
    entries: undefined,
  }
})
export class EntriesState {

  constructor(private entriesService: EntryService) { }

  @Action(GetEntries, { cancelUncompleted: true })
  getEntries({ patchState }: StateContext<IEntriesStateModel>) {
    return this.entriesService.loadEntries().pipe(tap(data => patchState({ entries: data })));
  }
}

