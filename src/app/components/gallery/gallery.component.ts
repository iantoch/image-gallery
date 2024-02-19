import { Component, Input, OnInit } from '@angular/core';
import { ImageCardComponent } from '../../shared/components/image-card/image-card.component';
import { ImageInfo } from '../../shared/models/giphy.model';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [ImageCardComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss',
})
export class GalleryComponent {
  @Input() imageList!: ImageInfo[];
  @Input() searchString?: string;
}
