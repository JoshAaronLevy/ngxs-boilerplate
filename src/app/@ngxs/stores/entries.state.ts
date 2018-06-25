import { Action, Selector, State, StateContext } from '@ngxs/store';
import { tap } from 'rxjs/operators';
import { EntryService } from '../../services/entry.service';
import { GetEntries, SetCurrentMonth } from '../actions/entries.actions';
import { IEntry } from '../model/data.objects';

export interface IEntriesStateModel {
  entries: Array<IEntry>;
  currentMonth: Date;
}

@State<IEntriesStateModel>({
  name: 'entriesState',
  defaults: {
    entries: new Array<IEntry>(),
    currentMonth: new Date()
  }
})
export class EntriesState {

  constructor(private entriesService: EntryService) { }

  @Selector()
  static currentMonth(state: IEntriesStateModel) {
    return state.currentMonth;
  }

  @Selector()
  static entries(state: IEntriesStateModel) {
    return state.entries;
  }

  @Action(SetCurrentMonth)
  SetCurrentMonth({ patchState, dispatch }: StateContext<IEntriesStateModel>, { payload }: SetCurrentMonth) {
    patchState({
      currentMonth: payload
    });
    dispatch(new GetEntries);
  }

  @Action(GetEntries, { cancelUncompleted: true })
  loadEntries({ patchState }: StateContext<IEntriesStateModel>, state: IEntriesStateModel) {
    if (!state.entries) {
      return this.entriesService.loadEntries().pipe(
        tap(data => data.forEach((entry) => {
          entry.date = new Date(entry.date);
        }))
        , tap(data => patchState({ entries: data })));
    } else {
      return state.entries;
    }
  }
}

