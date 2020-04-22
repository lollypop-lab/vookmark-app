import { createAction, props } from '@ngrx/store';

export const loadFolderList = createAction(
  '[Dashboard] Load Folder List'
);

export const loadFolderListSuccess = createAction(
  '[Dashboard] Load Folder List Success',
  props<{ data: any }>()
);

export const loadFolderListFailure = createAction(
  '[Dashboard] Load Folder List Failure',
  props<{ error: any }>()
);

export const loadBookmarkList = createAction(
  '[Dashboard] Load Bookmark List'
);

export const loadBookmarkListSuccess = createAction(
  '[Dashboard] Load Bookmark List Success',
  props<{ data: any }>()
);

export const loadBookmarkListFailure = createAction(
  '[Dashboard] Load Bookmark List Failure',
  props<{ error: any }>()
);
