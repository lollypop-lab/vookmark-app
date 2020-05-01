import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {Bookmark, Folder} from '../../models/bookmark.model';
import {BookmarkList, FolderList} from '../../mockData/bookmark.mock';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {
  // TODO: move to all url utils
  public url = 'http://markyourbook.herokuapp.com/';

  constructor(private http: HttpClient) { }
  public getFolderList(): Observable<Folder[]> {
    return this.http.get<Folder[]>(`${this.url}folders.json`);
  }

  public getBookmarkList(): Observable<Bookmark[]> {
    return of(BookmarkList);
  }

}

