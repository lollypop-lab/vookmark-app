import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Input() data;
  folders = [];
  constructor() { }

  ngOnInit(): void {
    this.folders = this.data.folders;
  }

}
