import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { Router } from './app.router'

import { AppComponent } from './app.component';
import { LandingComponent } from './components/landing/landing.component';
import { MainComponent } from './components/main/main.component';
import { NavComponent } from './components/main/nav/nav.component';
import { AddMovieComponent } from './components/main/add-movie/add-movie.component';
import { EditMovieComponent } from './components/main/edit-movie/edit-movie.component';
import { ShowcardComponent } from './components/main/showcard/showcard.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    MainComponent,
    NavComponent,
    AddMovieComponent,
    EditMovieComponent,
    ShowcardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Router,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
