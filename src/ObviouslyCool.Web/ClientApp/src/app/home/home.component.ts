import { Component } from '@angular/core';
import { NavigationItem } from '../navigation/models';
import { faTwitter, faYoutube, faTwitch, faGithub, faSteam } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  navigationItems: NavigationItem[] = [
    new NavigationItem('Home', ''),
    new NavigationItem('Watch', 'watch'),
    new NavigationItem('Games', 'games'),
    new NavigationItem('Code', 'code')
  ];

  faTwitter = faTwitter;
  faYoutube = faYoutube;
  faTwitch = faTwitch;
  faGithub = faGithub;
  faSteam = faSteam;

  constructor() { }

}
