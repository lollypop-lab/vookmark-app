import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() folders;
  public isNestedItemVisiabled: boolean = false;
  constructor() { }

  public get isVisible(): boolean {
    return this.isNestedItemVisiabled;
  }

  ngOnInit(): void {
    console.log(this.folders);
  }

  public onToggleClick(): void {
    this.isNestedItemVisiabled = !this.isNestedItemVisiabled;
  }
}
