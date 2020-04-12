import { Component, OnInit } from '@angular/core';
import {Bookmarks} from '../mockData/bookmark.mock';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data = Bookmarks;
  constructor() { }

  ngOnInit(): void {}

}
