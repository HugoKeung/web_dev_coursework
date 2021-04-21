import { BrowserModule } from '@angular/platform-browser';
import { NgModule,NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { EditComponent } from './edit/edit.component';
import { StocksComponent } from './stocks/stocks.component';
import { ErrorComponent } from './error/error.component';
import { NotesComponent } from './notes/notes.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TickerSearchComponent } from './ticker-search/ticker-search.component';
import { FormsModule } from '@angular/forms';
import { IndividualNoteComponent } from './notes/individual-note.component';
import { NotesInputComponent } from './notes/notes-input.component';
import { ChartComponent } from './chart/chart.component';
import { ChartsModule } from 'ng2-charts';
import { UserWatchlistComponent } from './user-watchlist/user-watchlist.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material-module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { UserWatchlistTableComponent } from './user-watchlist-table/user-watchlist-table.component';
import { NewsComponent } from './news/news.component';
import { IndividualNewsComponent } from './individual-news/individual-news.component';
import { InvalidComponent } from './invalid/invalid.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    HomeComponent,
    WelcomeComponent,
    EditComponent,
    StocksComponent,
    ErrorComponent,
    NotesComponent,
    TickerSearchComponent,
    IndividualNoteComponent,
    NotesInputComponent,
    ChartComponent,
    UserWatchlistComponent,
    UserWatchlistTableComponent,
    NewsComponent,
    IndividualNewsComponent,
    InvalidComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ChartsModule,
    HttpClientModule,
    MaterialModule,
    MDBBootstrapModule.forRoot()
 
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
