import { ExploreSchoolComponent } from './pages/explore-schools/explore-schools.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotfoundComponent } from './shared/components/notfound/notfound.component';
import { DetailedProfileComponent } from './pages/detailed-profile/detailed-profile.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'explore-schools',
  },
  {
    path: 'explore-schools',
    loadChildren: () =>
      import('./pages/explore-schools/explore-schools.module').then(
        (m) => m.ExploreSchoolsModule
      ),
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
