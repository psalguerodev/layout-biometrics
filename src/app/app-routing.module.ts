import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { InfoComponent } from './pages/info/info.component';
import { LibraryComponent } from './pages/library/library.component';
import { BioComponent } from './pages/bio/bio.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'biometrics', component: InfoComponent },
  { path: 'ibk-bio', component: BioComponent },
  { path: 'libraries', component: LibraryComponent },
  { path: '**', redirectTo: 'biometrics' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
