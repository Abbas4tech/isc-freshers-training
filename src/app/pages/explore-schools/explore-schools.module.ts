import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SearchbarComponent } from 'src/app/pages/explore-schools/components/searchbar/searchbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UniversityitemComponent } from 'src/app/pages/explore-schools/components/universityitem/universityitem.component';
import { DetailedProfileComponent } from '../detailed-profile/detailed-profile.component';
import { ExploreSchoolsRoutingModule } from './explore-schools-routing.module';
import { ExploreSchoolComponent } from './explore-schools.component';

@NgModule({
  declarations: [
    ExploreSchoolComponent,
    SearchbarComponent,
    DetailedProfileComponent,
    UniversityitemComponent,
  ],
  imports: [CommonModule, SharedModule, ExploreSchoolsRoutingModule],
  exports: [
    ExploreSchoolComponent,
    SearchbarComponent,
    DetailedProfileComponent,
    UniversityitemComponent,
  ],
})
export class ExploreSchoolsModule {}
