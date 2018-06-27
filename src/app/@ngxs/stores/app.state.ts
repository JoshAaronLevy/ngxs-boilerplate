import { State, Action, StateContext, Selector } from '@ngxs/store';
import { ResizeViewPort, Login, Logout, Navigate, NoBackendAvailable } from '../actions/app.actions';
import { GetEntries } from '../actions/entries.actions';
import { IEntriesStateModel } from './entries.state';

export interface IAppStateModel {
  route: string;
  user: string;
  size: string;
  windowSizes: any[];
  mockData?: boolean;
}

@State<IAppStateModel>({
  name: 'appState',
  defaults: {
    route: '',
    user: undefined,
    size: '',
    windowSizes: [
      {
        min: 0,
        max: 600,
        class: 'small'
      },
      {
        min: 601,
        max: 992,
        class: 'medium'
      },
      {
        min: 993,
        max: Number.MAX_SAFE_INTEGER,
        class: 'large'
      }
    ]
  }
})
export class AppState {

  @Selector()
  static getUser(state: IAppStateModel) {
    return state.user;
  }

  @Selector()
  static getSize(state: IAppStateModel) {
    return state.size;
  }

  @Action(ResizeViewPort)
  resize({ patchState }: StateContext<IAppStateModel>, { payload }: ResizeViewPort, state: IAppStateModel) {
    patchState({
      size: state.windowSizes.filter(ws => {
        return ws.min <= payload && ws.max >= payload;
      })[0].class
    });
  }

  @Action(Logout)
  logout({ patchState }: StateContext<IAppStateModel>, { }: Logout) {
    patchState({
      user: undefined
    });
  }

  @Action(Login)
  login({ patchState }: StateContext<IAppStateModel>, { payload }: Login) {
    patchState({
      user: payload
    });
  }

  @Action(Navigate)
  navigate({ patchState }: StateContext<IAppStateModel>, { payload }: Navigate) {
    patchState({
      route: payload
    });
  }

  @Action(NoBackendAvailable)
  mockData({ patchState }: StateContext<IAppStateModel>) {
    alert('there is no backend available. Do you want to use mocked data?');
  }


}
