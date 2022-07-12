import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExploreSchoolComponent } from './pages/explore-schools/explore-schools.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';

const routes: Routes = [
  {
    path: 'explore-schools',
    component: ExploreSchoolComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'explore-schools',
  },
  {
    path: '**',
    component: NotfoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
