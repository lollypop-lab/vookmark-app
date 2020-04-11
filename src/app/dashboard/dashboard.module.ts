import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { BookmarksContainerComponent } from './components/bookmarks-container/bookmarks-container.component';
import { FolderComponent } from './components/folder/folder.component';


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
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule { }
