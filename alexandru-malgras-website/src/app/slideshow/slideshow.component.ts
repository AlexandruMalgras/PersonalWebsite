import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})

export class SlideshowComponent {
  @Input() images: { src: string, alt?: string, caption?: string }[] = [];
  currentImageIndex = 0;
  showViewer = false;

  getCurrentImage() {
    return this.images[this.currentImageIndex];
  }

  prevImage() {
    this.currentImageIndex--;
    if (this.currentImageIndex < 0) {
      this.currentImageIndex = this.images.length - 1;
    }
  }

  nextImage() {
    this.currentImageIndex++;
    if (this.currentImageIndex >= this.images.length) {
      this.currentImageIndex = 0;
    }
  }

  openImageViewer() {
    this.showViewer = true;
  }

  hideViewer() {
    this.showViewer = false;
  }
}
