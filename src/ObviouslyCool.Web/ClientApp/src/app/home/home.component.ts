import { Component } from '@angular/core';
import { ExternalNavigationItem, InternalNavigationItem, NavigationItem } from '../navigation/models';
import { faTwitter, faYoutube, faTwitch, faGithub, faSteam, IconDefinition } from '@fortawesome/free-brands-svg-icons';

export class Social {
  icon: IconDefinition;
  url: string;

  constructor(icon: IconDefinition, url: string) {
    this.icon = icon;
    this.url = url;
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  navigationItems: NavigationItem[] = [
    new InternalNavigationItem('Home', ''),
    new ExternalNavigationItem('Twitch', 'https://twitch.tv/crisp2020'),
    new ExternalNavigationItem('Discord', 'https://discord.gg/2DFqfgVVYm'),
  ];

  faTwitter = faTwitter;
  faYoutube = faYoutube;
  faTwitch = faTwitch;
  faGithub = faGithub;
  faSteam = faSteam;

  socials: Social[] = [
    new Social(this.faTwitter, 'https://twitter.com/crisp2020'),
    new Social(this.faYoutube, 'https://youtube.com/crisp2020'),
    new Social(this.faTwitch, 'https://twitch.tv/crisp2020'),
    new Social(this.faGithub, 'https://github.com/theaswanson'),
    new Social(this.faSteam, 'https://steamcommunity.com/id/crisp2020'),
  ];

  constructor() { }

}
