import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importing forms module to this file


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBars,
  faCoffee,
  faChartArea,
  faTachometerAlt,
  faCog,
  faWrench,
  faSearch,
  faTable,
  faFolder,
  faUserCircle,
  faEnvelope,
  faAngleRight,
  faAngleLeft,
  faAngleDown,
  faAngleUp,
  faGlassMartini
} from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';

import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    CoreModule,
    FormsModule // Importing forms module to application module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    // Add an icon to the library for convenient access in other components
    library.add(faBars);
    library.add(faCoffee);
    library.add(faFolder);
    library.add(faChartArea);
    library.add(faUserCircle);
    library.add(faEnvelope);
    library.add(faSearch);
    library.add(faTwitter);
    library.add(faTable);
    library.add(faFacebook);
    library.add(faTachometerAlt);
    library.add(faCog);
    library.add(faWrench);
    library.add(faAngleRight);
    library.add(faAngleLeft);
    library.add(faAngleUp);
    library.add(faAngleDown);
    library.add(faGlassMartini);
  }
}
