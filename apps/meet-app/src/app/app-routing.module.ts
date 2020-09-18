import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@webrtc-demos/auth';
import { LoginComponent } from '@webrtc-demos/ui-login';
import { HomeComponent } from './home/home.component';
import { RedirectComponent } from './redirect/redirect.component';

const routes: Routes = [
  {
    path: 'info',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'projects',
    loadChildren: () =>
      import('./projects/projects.module').then((m) => m.ProjectsModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'redirect',
    component: RedirectComponent,
  },
  {
    path: '**',
    redirectTo: 'info',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
