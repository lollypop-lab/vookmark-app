import { Action, createReducer, on } from '@ngrx/store';
import * as DashboardActions from '../actions/dashboard.actions';
import {Bookmark, Folder} from '../../models/bookmark.model';
import {Bookmarks} from '../../mockData/bookmark.mock';

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
  folderList: [],
  bookmarkList: []
};


export const reducer = createReducer(
  initialState,

  on(DashboardActions.loadFolderList, state => state),
  on(DashboardActions.loadFolderListSuccess, (state, action) => ({
    ...state,
    folderList: action.data
  })),
  on(DashboardActions.loadFolderListFailure, (state, action) => state),
  on(DashboardActions.loadBookmarkListSuccess, (state, action) => ({
    ...state,
    bookmarkList: action.data
  })),
  on(DashboardActions.loadBookmarkListFailure, (state, action) => state),

);

