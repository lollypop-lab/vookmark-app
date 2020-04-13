import { Component, OnInit } from '@angular/core';
import {Bookmarks} from '../mockData/bookmark.mock';
import {Store} from '@ngrx/store';
import {getBookmarksList, getFolderList, selectDashboardState} from '../selectors/dashboard.selectors';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public folders;
  public bookmarks;
  public dataLoaded: boolean = false;
  constructor(private store: Store, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.params.subscribe(params => {
      if(params.id) {
        this.store.select(getFolderList).subscribe(folders => {
          this.folders = folders.filter((folder) => folder.folder_id == params.id);
          this.dataLoaded = true;
        });
        this.store.select(getBookmarksList).subscribe(bookmarks => {
          this.bookmarks = bookmarks.filter(bookmark => bookmark.folder_id == params.id)
        });
      } else {
        this.store.select(getFolderList).subscribe(folders => {
          this.folders = folders;
          this.dataLoaded = true;
        });
      }
    });
  }

}
