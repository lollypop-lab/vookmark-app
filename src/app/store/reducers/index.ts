import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import * as fromRouter from '@ngrx/router-store';
import { environment } from '../../../environments/environment';

export interface State {
  router: fromRouter.RouterReducerState<any>;
}

export const reducers: ActionReducerMap<State> = {
  router: fromRouter.routerReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];


// router selector
export const selectRouter = createFeatureSelector<
  State,
  fromRouter.RouterReducerState<any>
  >('router');

export const {
  selectCurrentRoute,   // select the current route
  selectQueryParams,    // select the current route query params
  selectQueryParam,     // factory function to select a query param
  selectRouteParams,    // select the current route params
  selectRouteParam,     // factory function to select a route param
  selectRouteData,      // select the current route data
  selectUrl,            // select the current url
} = fromRouter.getSelectors(selectRouter);

