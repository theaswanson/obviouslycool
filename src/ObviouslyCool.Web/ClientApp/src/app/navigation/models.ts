export abstract class NavigationItem {
  title: string;
  
  abstract isExternal(): boolean;
  abstract getRoute(): string;

  constructor(title: string) {
    this.title = title;
  }
}

export class InternalNavigationItem extends NavigationItem {
  route: string;
  
  constructor(title: string, route: string) {
    super(title);
    this.route = route;
  }
  
  isExternal(): boolean {
    return false;
  }

  getRoute(): string {
    return this.route;
  }
}

export class ExternalNavigationItem extends NavigationItem {
  url: string;

  constructor(title: string, url: string) {
    super(title);
    this.url = url;
  }

  isExternal(): boolean {
    return true;
  }
  
  getRoute(): string {
    return this.url;
  }
}