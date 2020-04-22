import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { RouterModule, Routes } from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BookmarksContainerComponent } from './components/bookmarks-container/bookmarks-container.component';
import { FolderComponent } from './components/folder/folder.component';
import { StoreModule } from '@ngrx/store';
import * as fromDashboard from '../store/reducers/dashboard.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DashboardEffects } from '../store/effects/dashboard.effects';
import {FormsModule} from '@angular/forms';


const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path: 'folders/:id',
    component: DashboardComponent
  },
];
@NgModule({
  declarations: [DashboardComponent, SidebarComponent, BookmarksContainerComponent, FolderComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature(fromDashboard.dashboardFeatureKey, fromDashboard.reducer),
    EffectsModule.forFeature([DashboardEffects]),
    FormsModule
  ]
})
export class DashboardModule { }
