import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { TopTracksComponent } from './top-tracks/top-tracks.component';
import { TopArtistsComponent } from './top-artists/top-artists.component';

const routes: Routes = [
  
  { path: 'login', component: LoginComponent },
  { path: 'top-tracks', component: TopTracksComponent },
  { path: 'top-artists', component: TopArtistsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopTracksComponent,
    TopArtistsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
