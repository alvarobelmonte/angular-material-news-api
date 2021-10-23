import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopPageComponent } from './pages/top-page/top-page.component';
import { EverythingPageComponent } from './pages/everything-page/everything-page.component';

const routes: Routes = [
  { path: '', component: EverythingPageComponent },
  { path: 'top', component: TopPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
