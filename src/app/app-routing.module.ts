import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactAppComponent } from './pages/contact-app/contact-app.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { ChartPageComponent } from './pages/chart-page/chart-page.component';
const routes: Routes = [
  {path: '',component: HomePageComponent},
  {path: 'contacts', component: ContactAppComponent},
  {path: 'charts', component: ChartPageComponent},
  {path: 'user', component: UserPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
