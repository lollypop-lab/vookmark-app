// TODO: need to work on this component
// very important to manage both folder and link together
import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.scss']
})
export class FolderComponent implements OnInit {
  @Input() data;
  folder = {
    folders: []
  };
  folders = [];
  constructor() { }

  ngOnInit(): void {
    console.log(this.data);
    this.folder = this.data;
    this.folders = this.folder.folders;
  }

}
