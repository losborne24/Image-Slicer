import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss'],
})
export class DragAndDropComponent implements OnInit {
  @Output() imageFile = new EventEmitter<any>();

  fileHover = false;
  fileDropped = false;

  constructor() {}

  ngOnInit(): void {}

  onFileHover(isFileHover) {
    this.fileHover = isFileHover;
    this.fileDropped = false;
  }

  onFileDropped($event) {
    this.fileDropped = true;
    this.onFileUpload($event);
  }
  onFileSelected($event) {
    if ($event.target.files.length > 0) {
      let file = $event.target.files[0];
      this.onFileUpload(file);
    }
  }
  onFileUpload(file) {
    this.imageFile.emit(file);
  }
}
