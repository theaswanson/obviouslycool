import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  http: HttpClient;
  baseUrl: string;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.baseUrl = baseUrl;
  }

  getTopArtists(): Observable<TopArtist[]> {
    return this.http.get<TopArtist[]>(this.apiUrl + 'api/spotify');
  }

  private get apiUrl(): string {
    if (environment.production) {
      return environment.apiUrl;
    }

    return this.baseUrl;
  }
}

export interface TopArtist {
  name: string;
  imageUrl: string;
  artistUrl: string;
}