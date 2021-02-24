import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { TopTracksComponent } from './top-tracks/top-tracks.component';
import { TopArtistsComponent } from './top-artists/top-artists.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

const routes: Routes = [
  
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'top-tracks', component: TopTracksComponent },
  { path: 'top-artists', component: TopArtistsComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TopTracksComponent,
    TopArtistsComponent,
    HomeComponent,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
