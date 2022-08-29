# Adding existing Angular app to ASP.NET Core Web App

## Changes

### `.gitignore`

Add /dist-server

### `angular.json`

"outputPath": "dist"

"@schematics/angular:application": {
	"strict": true
}

"development": {
              "proxyConfig": "proxy.conf.js"
            }

"server": {
          "builder": "@angular-devkit/build-angular:server",
          "options": {
            "outputPath": "dist-server",
            "main": "src/main.ts",
            "tsConfig": "tsconfig.server.json"
          },
          "configurations": {
            "dev": {
              "optimization": true,
              "outputHashing": "all",
              "sourceMap": false,
              "namedChunks": false,
              "extractLicenses": true,
              "vendorChunk": true
            },
            "production": {
              "optimization": true,
              "outputHashing": "all",
              "sourceMap": false,
              "namedChunks": false,
              "extractLicenses": true,
              "vendorChunk": false
            }
          }
        }

"defaultProject": "ObviouslyCool.Web" (now deprecated)

### `package.json`

"scripts": {
    "prestart": "node aspnetcore-https",
    "start": "run-script-os",
    "start:windows": "ng serve --port 44474 --ssl --ssl-cert %APPDATA%\\ASP.NET\\https\\%npm_package_name%.pem --ssl-key %APPDATA%\\ASP.NET\\https\\%npm_package_name%.key",
    "start:default": "ng serve --port 44474 --ssl --ssl-cert $HOME/.aspnet/https/${npm_package_name}.pem --ssl-key $HOME/.aspnet/https/${npm_package_name}.key",
  },

"dependencies": {
    "bootstrap": "^5.1.3",
    "jquery": "^3.6.0",
    "oidc-client": "^1.11.5",
    "popper.js": "^1.16.0",
    "run-script-os": "^1.1.6",
  },

"devDependencies": {
    "@types/jasminewd2": "~2.0.10",
    "@types/node": "^17.0.29",
  },

### `tsconfig.spec.json`

"types": [
      "node"
    ]

### `proxy.conf.js`

const { env } = require('process');

const target = env.ASPNETCORE_HTTPS_PORT ? `https://localhost:${env.ASPNETCORE_HTTPS_PORT}` :
  env.ASPNETCORE_URLS ? env.ASPNETCORE_URLS.split(';')[0] : 'http://localhost:49296';

const PROXY_CONFIG = [
  {
    context: [
      "/weatherforecast",
   ],
    target: target,
    secure: false,
    headers: {
      Connection: 'Keep-Alive'
    }
  }
]

module.exports = PROXY_CONFIG;


### `src/main.ts`

export function getBaseUrl() {
  return document.getElementsByTagName('base')[0].href;
}

const providers = [
  { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];

...

platformBrowserDynamic(providers).bootstrapModule(AppModule)
  .catch(err => console.log(err));

### `src/app/app.server.module.ts`

import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { ModuleMapLoaderModule } from '@nguniversal/module-map-ngfactory-loader';
import { AppComponent } from './app.component';
import { AppModule } from './app.module';

@NgModule({
    imports: [AppModule, ServerModule, ModuleMapLoaderModule],
    bootstrap: [AppComponent]
})
export class AppServerModule { }

### `src/app/app.module.ts`

imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
  ],

