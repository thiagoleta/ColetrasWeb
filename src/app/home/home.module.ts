import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { SidebarComponent } from './../shared/sidebar/sidebar.component';
import { HeaderComponent } from './../shared/header/header.component';
import { FooterComponent } from './../shared/footer/footer.component';


@NgModule({
  declarations: [
    AdminPanelComponent,
    SidebarComponent,
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FontAwesomeModule
  ]
})
export class HomeModule { }
