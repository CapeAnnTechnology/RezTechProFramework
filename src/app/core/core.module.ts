import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavComponent } from './nav/nav.component';
import { TopbarComponent } from './topbar/topbar.component';
import { NavbarComponent } from './navbar/navbar.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, SidebarComponent, NavComponent, TopbarComponent, NavbarComponent],
  imports: [
    CommonModule,
    FontAwesomeModule
  ],
  exports: [HeaderComponent, FooterComponent, SidebarComponent, NavComponent, TopbarComponent, NavbarComponent]
})
export class CoreModule { }
