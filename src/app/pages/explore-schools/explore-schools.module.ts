import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchbarComponent } from 'src/app/components/searchbar/searchbar.component';
import { SharedModule } from 'src/app/components/shared/shared.module';
import { DetailedProfileComponent } from '../detailed-profile/detailed-profile.component';
import { ExploreSchoolsRoutingModule } from './explore-schools-routing.module';
import { ExploreSchoolComponent } from './explore-schools.component';

@NgModule({
  declarations: [
    ExploreSchoolComponent,
    SearchbarComponent,
    DetailedProfileComponent,
  ],
  imports: [CommonModule, SharedModule, ExploreSchoolsRoutingModule],
  exports: [
    ExploreSchoolComponent,
    SearchbarComponent,
    DetailedProfileComponent,
  ],
})
export class ExploreSchoolsModule {}