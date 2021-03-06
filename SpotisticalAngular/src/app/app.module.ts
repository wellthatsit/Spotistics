import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { TopTracksComponent } from './top-tracks/top-tracks.component';
import { TopArtistsComponent } from './top-artists/top-artists.component';
import { HomeComponent } from './home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { environment } from 'src/environments/environment';

const routes: Routes = [
  
  { path: '', component: HomeComponent },
  { path: 'top-tracks', component: TopTracksComponent },
  { path: 'top-artists', component: TopArtistsComponent }
];

const developmentApiBaseUrl : string = 'https://localhost:44333/api';
const productionApiBaseUrl : string = 'https://spotistics.azurewebsites.net/api';

@NgModule({
  declarations: [
    AppComponent,
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
  providers: [
    { provide: 'API_BASE_URL', useValue: environment.production ? productionApiBaseUrl : developmentApiBaseUrl  } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
