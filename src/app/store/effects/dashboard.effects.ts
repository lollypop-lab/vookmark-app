import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import {catchError, map, concatMap, switchMap, tap} from 'rxjs/operators';
import { of } from 'rxjs';

import * as DashboardActions from '../actions/dashboard.actions';
import {ROUTER_NAVIGATION} from '@ngrx/router-store';
import {DashboardService} from '../../shared/services/dashboard.service';

@Injectable()
export class DashboardEffects {
  onNavigation$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(ROUTER_NAVIGATION),
      // TODO: filter out by dashboad url only
      tap(router => console.log(router)),
      switchMap(() => [
        DashboardActions.loadFolderList(),
        DashboardActions.loadBookmarkList()
      ])
    );
  });

  loadDashboardsFolder$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DashboardActions.loadFolderList),
      concatMap(() =>
        this.dashboardService.getFolderList().pipe(
          map(data => DashboardActions.loadFolderListSuccess({ data })),
          catchError(error => of(DashboardActions.loadFolderListFailure({ error }))))
      )
    );
  });

  loadDashboardsBookmark$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(DashboardActions.loadBookmarkList),
      concatMap(() =>
        this.dashboardService.getBookmarkList().pipe(
          map(data => DashboardActions.loadBookmarkListSuccess({ data })),
          catchError(error => of(DashboardActions.loadBookmarkListFailure({ error }))))
      )
    );
  });

  constructor(private actions$: Actions, private dashboardService: DashboardService) {}
}
