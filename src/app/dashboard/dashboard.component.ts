import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {getBookmarksList, getFolderList} from '../selectors/dashboard.selectors';
import {ActivatedRoute} from '@angular/router';
import FlexSearch from 'flexsearch';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public searchString;
  public folders;
  public bookmarks;
  public dataLoaded: boolean = false;
  public folderIndex = FlexSearch.create({
    doc: {
      id: 'id',
      field: [
        'title',
        'description'
      ]
    }
  });
  public bookmarkIndex = FlexSearch.create({
    doc: {
      id: 'id',
      field: [
        'title',
        'url',
        'description'
      ]
    }
  });

  constructor(private store: Store, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.router.params.subscribe(params => {
      if(params.id) {
        const id = Number(params.id);
        this.getFolders(id);
        this.getBookmarks(id);
      } else {
        this.getFolders();
        this.getBookmarks();
      }
    });
  }

  search() {
    if(this.searchString) {
      this.folders = this.folderIndex.search(this.searchString);
      this.bookmarks = this.bookmarkIndex.search(this.searchString);
    } else {
      this.fetchData();
    }
  }

  getBookmarks(folderId: number = 0) {
    this.store.select(getBookmarksList).subscribe(bookmarks => {
      this.bookmarkIndex.add(bookmarks);
      if(folderId > 0) {
        this.bookmarks = bookmarks.filter(bookmark => Number(bookmark.folder_id) === folderId);
      }
    });
  }

  getFolders(folderId: number = 0) {
    this.store.select(getFolderList).subscribe(folders => {
      this.folderIndex.add(folders);
      if(folderId > 0) {
        this.folders = folders.filter((folder) => Number(folder.folder_id) === folderId);
        this.dataLoaded = true;
      } else {
        this.folders = folders
        this.dataLoaded = true;
      }
    });
  }

}
