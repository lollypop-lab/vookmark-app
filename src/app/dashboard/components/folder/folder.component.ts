// TODO: need to work on this component
// very important to manage both folder and link together
import {Component, Input, OnInit} from '@angular/core';
import {Folder} from '../../../models/folder.model';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {
  @Input() folderInformation: Folder;
  public hasBookmarks: boolean = false;
  public hasSubFolders: boolean = false;
  public isDropDownOn: boolean = false;
  constructor() { }

  ngOnInit(): void {
    // if (this.folderInformation.bookmarks.length > 0) {
    //   this.hasBookmarks = true;
    // }
    // if (this.folderInformation.folders) {
    //   this.hasSubFolders = true;
    // }
  }

  public onToggleClick(): void {
    this.isDropDownOn = !this.isDropDownOn;
  }
}
