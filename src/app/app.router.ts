import { Routes, RouterModule } from '@angular/router'
// Components
import { LandingComponent } from './components/landing/landing.component'
import { MainComponent } from './components/main/main.component'
import { AddMovieComponent } from './components/main/add-movie/add-movie.component'

const APP_ROUTES: Routes = [
  { path: '', component: LandingComponent },
  { path: 'main', component: MainComponent },
  { path: 'add', component: AddMovieComponent },
]

export const Router = RouterModule.forRoot(APP_ROUTES)
