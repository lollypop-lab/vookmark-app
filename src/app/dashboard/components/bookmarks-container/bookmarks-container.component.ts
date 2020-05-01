import {Component, Input, OnInit} from '@angular/core';
import {Bookmark} from '../../../models/bookmark.model';
import {Folder} from '../../../models/folder.model';

@Component({
  selector: 'app-bookmarks-container',
  templateUrl: './bookmarks-container.component.html',
  styleUrls: ['./bookmarks-container.component.scss']
})
export class BookmarksContainerComponent implements OnInit {
  @Input() folders: Array<Folder>;
  @Input() bookmarks: Array<Bookmark>;
  constructor() { }

  ngOnInit(): void {

  }

}
