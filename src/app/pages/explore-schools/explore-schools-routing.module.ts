import { DetailedProfileComponent } from './../detailed-profile/detailed-profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreSchoolComponent } from './explore-schools.component';
import { DetailedpageResolver } from 'src/app/resolver/detailedpage.resolver';

const routes: Routes = [
  {
    path: '',
    component: ExploreSchoolComponent,
  },
  {
    path: ':id',
    component: DetailedProfileComponent,
    resolve: {
      detailedData: DetailedpageResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExploreSchoolsRoutingModule {}
