import { Action, createReducer, on } from '@ngrx/store';
import * as DashboardActions from '../actions/dashboard.actions';
import {Bookmarks} from '../mockData/bookmark.mock';

export const dashboardFeatureKey = 'dashboard';

export interface State {
  loading: boolean;
  lists: any;
}

export const initialState: State = {
  loading: false,
  lists: Bookmarks
};


export const reducer = createReducer(
  initialState,

  on(DashboardActions.loadDashboards, state => state),
  on(DashboardActions.loadDashboardsSuccess, (state, action) => state),
  on(DashboardActions.loadDashboardsFailure, (state, action) => state),

);

