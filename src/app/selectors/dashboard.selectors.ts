import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromDashboard from '../reducers/dashboard.reducer';

export const selectDashboardState = createFeatureSelector<fromDashboard.State>(
  fromDashboard.dashboardFeatureKey
);

export const getBookmarksList = createSelector(
  selectDashboardState,
  (state) => state.bookmarkList
);

export const getFolderList = createSelector(
  selectDashboardState,
  (state) => state.folderList
);
