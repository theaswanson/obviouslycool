import { Component, Input, OnInit } from '@angular/core';

// Access Twitch from the index.html embed script
declare let Twitch: any;

@Component({
  selector: 'app-twitch',
  templateUrl: './twitch.component.html',
  styleUrls: ['./twitch.component.scss']
})
export class TwitchComponent implements OnInit {
  
  twitch: any;

  constructor() { }

  ngOnInit(): void {
    this.twitch = new Twitch.Embed('twitch-embed', {
      width: '100%',
      height: '300px',
      channel: 'crisp2020',
      layout: 'video'
    });
  }

}
