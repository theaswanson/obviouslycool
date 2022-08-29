export class NavigationItem {
  title: string;
  route: string;

  constructor(title: string, route: string) {
    this.title = title;
    this.route = route;
  }
}

export class ExternalNavigationItem {
  title: string;
  url: string;

  constructor(title: string, url: string) {
    this.title = title;
    this.url = url;
  }
}