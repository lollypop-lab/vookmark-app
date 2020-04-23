import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Bookmark} from '../../models/bookmark.model';
import {Folder} from '../../models/folder.model';
import {BookmarkList, FolderList} from '../../mockData/bookmark.mock';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {

  constructor() { }
  // TODO: do the actual HHTP call
  public getFolderList(): Observable<Folder[]> {
    return of(FolderList);
  }

  public getBookmarkList(): Observable<Bookmark[]> {
    return of(BookmarkList);
  }

}

