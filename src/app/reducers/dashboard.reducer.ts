import { Action, createReducer, on } from '@ngrx/store';
import * as DashboardActions from '../actions/dashboard.actions';
import {BookmarkList, Bookmarks, FolderList} from '../mockData/bookmark.mock';
import {Bookmark, Folder} from '../models/bookmark.model';

export const dashboardFeatureKey = 'dashboard';

export interface State {
  loading: boolean;
  lists: any;
  folderList: Array<Folder>;
  bookmarkList: Array<Bookmark>;
}

export const initialState: State = {
  loading: false,
  lists: Bookmarks,
  folderList: FolderList,
  bookmarkList: BookmarkList
};


export const reducer = createReducer(
  initialState,

  on(DashboardActions.loadDashboards, state => state),
  on(DashboardActions.loadDashboardsSuccess, (state, action) => state),
  on(DashboardActions.loadDashboardsFailure, (state, action) => state),

);

