import { IFilter } from '../model/data.objects';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { AddFilter, RemoveFilter, DoFilter } from '../actions/filter.actions';
import { IEntriesStateModel } from './entries.state';


export interface IFilterStateModel {
  filters: IFilter[];
}

@State<IFilterStateModel>({
  name: 'filterState',
  defaults: {
    filters: [],
  }
})
export class FilterState {

  @Selector()
  static filters(state: IFilterStateModel) {
    return state.filters;
  }

  @Action(DoFilter)
  doFilter({ patchState }: StateContext<IEntriesStateModel>
    , filterState: StateContext<IFilterStateModel>
    , entryState: StateContext<IEntriesStateModel>) {

      // filterState.getState().filters.forEach(filter => {
      //   filter.doFilter();
      // });
  }

  @Action(AddFilter)
  addFilter({ patchState }: StateContext<IFilterStateModel>, state: IFilterStateModel) {



  }

  @Action(RemoveFilter)
  removeFilter({ patchState }: StateContext<IFilterStateModel>, state: IFilterStateModel) {



  }

}
