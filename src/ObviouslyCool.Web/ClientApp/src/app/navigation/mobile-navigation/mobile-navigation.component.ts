import { Component, Input, OnInit } from '@angular/core';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { ExternalNavigationItem, NavigationItem } from '../models';

@Component({
  selector: 'app-mobile-navigation',
  templateUrl: './mobile-navigation.component.html',
  styleUrls: ['./mobile-navigation.component.scss']
})
export class MobileNavigationComponent implements OnInit {

  @Input() navigationItems?: NavigationItem[];

  faBars = faBars;
  navigationOpen = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNavigation() {
    this.navigationOpen = !this.navigationOpen;
  }

  navigate(fragment?: string) {
    this.navigationOpen = false;
    if (fragment) {
      setTimeout(() => {
        this.scrollToElement(fragment);
      }, 1);
    }
  }

  private scrollToElement(id: string) {
    const element = document.querySelector(`#${id}`);
    element?.scrollIntoView({ behavior: 'smooth' });
  }
}
