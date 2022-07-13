import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackdropComponent } from './components/backdrop/backdrop.component';
import { CardComponent } from './components/card/card.component';
import { NotfoundComponent } from 'src/app/shared/components/notfound/notfound.component';
import { NavbarComponent } from './components/header/components/navbar/navbar.component';
import { SidebarComponent } from './components/header/components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    BackdropComponent,
    CardComponent,
    HeaderComponent,
    NavbarComponent,
    SidebarComponent,
    NotfoundComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    BackdropComponent,
    CardComponent,
    HeaderComponent,
    NavbarComponent,
    SidebarComponent,
    NotfoundComponent,
  ],
})
export class SharedModule {}
