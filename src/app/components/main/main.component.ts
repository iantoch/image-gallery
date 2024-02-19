import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { GiphyService } from '../../shared/services/giphy.service';
import { ImageInfo } from '../../shared/models/giphy.model';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [SearchBarComponent, GalleryComponent, NgxSkeletonLoaderModule],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit {
  imageList: ImageInfo[] = [];

  searchString = '';

  isLoading = true;

  constructor(private giphyService: GiphyService) {}

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages() {
    this.giphyService.getTrendingImages().subscribe({
      next: (images) => {
        this.imageList = images;
        this.isLoading = false;
      },
      error: () => {
        this.isLoading = false;
      },
    });
  }

  handleSearch(searchString: string) {
    this.searchString = searchString;
    this.isLoading = true;
    if (searchString) {
      this.giphyService.getSearchedImages(searchString).subscribe({
        next: (images) => {
          this.imageList = images;
          this.isLoading = false;
        },
        error: () => {
          this.isLoading = false;
        },
      });
    } else {
      this.loadImages();
    }
  }
}
