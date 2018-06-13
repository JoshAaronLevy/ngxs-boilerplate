import { State, Action, StateContext, Selector } from '@ngxs/store';
import { ResizeViewPort, Login, Logout, Navigate } from '../actions/app.actions';
import { GetEntries } from '../actions/entries.actions';
import { IEntriesStateModel } from './entries.state';

export interface IAppStateModel {
  route: string;
  user: string;
  size: string;
}

@State<IAppStateModel>({
  name: 'appState',
  defaults: {
    route: '',
    user: undefined,
    size: ''
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
  resize({ patchState }: StateContext<IAppStateModel>, { payload }: ResizeViewPort) {
    patchState({
      size: payload
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


}
