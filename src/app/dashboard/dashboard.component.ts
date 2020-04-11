import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  data = {
    folders: [
      {
        id: 1, title: 'Folder Title 1',
        folders: [
          {
            id: 2, title: 'Sub Folder Title 2',
            folders: [
              {
                id: 2, title: 'Sub Sub Folder Title 3',
                bookmarks: []
              }
            ],
            bookmarks: [
              {id: 1, title: 'Bookmark Title 1', url: 'http://bookmark.com', folder_id: 1},
              {id: 2, title: 'Bookmark Title 2', url: 'http://bookmark2.com', folder_id: 1},
            ]
          }
        ],
        bookmarks: [
          {id: 1, title: 'Bookmark Title 1', url: 'http://bookmark.com', folder_id: 1},
          {id: 2, title: 'Bookmark Title 2', url: 'http://bookmark2.com', folder_id: 1},
        ]
      }
    ]
  };
  constructor() { }

  ngOnInit(): void {}

}
