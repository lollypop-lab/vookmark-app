import { Component, OnInit } from '@angular/core';
import {Bookmarks} from '../mockData/bookmark.mock';
import {Store} from '@ngrx/store';
import {getBookmarksList, getFolders, selectDashboardState} from '../selectors/dashboard.selectors';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public data;
  constructor(private store: Store) { }

  ngOnInit(): void {
    this.data = this.store.select(getFolders);
    this.store.select(getFolders).subscribe(data => {
      console.log(data);
    })
  }

}
