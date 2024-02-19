import { Component, Input } from '@angular/core';
import { ImageInfo } from '../../models/giphy.model';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-image-card',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.scss',
})
export class ImageCardComponent {
  @Input() image!: ImageInfo;
  @Input() index!: number;
}
