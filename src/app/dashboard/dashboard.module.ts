import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BookmarksContainerComponent } from './components/bookmarks-container/bookmarks-container.component';
import { FolderComponent } from './components/folder/folder.component';
import { StoreModule } from '@ngrx/store';
import * as fromDashboard from '../reducers/dashboard.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from '../effects/dashboard.effects';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  }
];
@NgModule({
  declarations: [DashboardComponent, SidebarComponent, BookmarksContainerComponent, FolderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(fromDashboard.dashboardFeatureKey, fromDashboard.reducer),
    EffectsModule.forFeature([DashboardEffects])
  ]
})
export class DashboardModule { }
