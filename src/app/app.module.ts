import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavbarComponent } from './components/header/components/navbar/navbar.component';
import { SidebarComponent } from './components/header/components/sidebar/sidebar.component';
import { SharedModule } from './components/shared/shared.module';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { ExploreSchoolsModule } from './pages/explore-schools/explore-schools.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavbarComponent,
    SidebarComponent,
    NotfoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    ExploreSchoolsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
