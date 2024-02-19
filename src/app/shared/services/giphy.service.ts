import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ImageInfo, ImageListResponse } from '../models/giphy.model';

const API = 'https://api.giphy.com/v1/gifs';
const USER_KEY = 'rCoTiZu17kYBMl9w25svjIsyxYYpCtQr';

@Injectable({
  providedIn: 'root',
})
export class GiphyService {
  constructor(private http: HttpClient) {}

  getTrendingImages(): Observable<ImageInfo[]> {
    const params = new HttpParams().set('api_key', USER_KEY);
    return this.http
      .get<ImageListResponse>(`${API}/trending/`, { params })
      .pipe(map(({ data }) => data));
  }

  getSearchedImages(searchString: string): Observable<ImageInfo[]> {
    const params = new HttpParams()
      .set('api_key', USER_KEY)
      .set('q', searchString)
      .set('limit', 10);
    return this.http
      .get<ImageListResponse>(`${API}/search/`, { params })
      .pipe(map(({ data }) => data));
  }
}
