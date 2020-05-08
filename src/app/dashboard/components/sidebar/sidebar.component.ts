import {Component, Input, OnInit} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {BookmarkDialogComponent} from '../bookmark-dialog/bookmark-dialog.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() folders;
  public isNestedItemVisiabled: boolean = false;
  constructor(private dialog: MatDialog) { }

  public get isVisible(): boolean {
    return this.isNestedItemVisiabled;
  }

  ngOnInit(): void {
    console.log(this.folders);
  }

  public onToggleClick(): void {
    this.isNestedItemVisiabled = !this.isNestedItemVisiabled;
  }

  addBookMark() {
    const diaRef = this.dialog.open(BookmarkDialogComponent);

    diaRef.afterClosed().subscribe(() => {
      console.log('closed');
    });
  }
}
