import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreSchoolComponent } from './explore-schools.component';

const routes: Routes = [
  {
    path: '',
    component: ExploreSchoolComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExploreSchoolsRoutingModule {}