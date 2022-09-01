import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

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
    return this.http.get<TopArtist[]>(this.baseUrl + 'api/spotify');
  }
}

export interface TopArtist {
  name: string;
  imageUrl: string;
  artistUrl: string;
}