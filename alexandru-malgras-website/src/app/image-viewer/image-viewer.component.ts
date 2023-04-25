import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-image-viewer',
  templateUrl: './image-viewer.component.html',
  styleUrls: ['./image-viewer.component.css']
})
export class ImageViewerComponent {
  @Input() imageSrc: string;
  @Output() closeViewer = new EventEmitter<void>();

  constructor() {
    this.imageSrc = '';
  }

  close() {
    this.closeViewer.emit();
  }
}
