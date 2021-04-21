import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { StocksComponent } from './stocks/stocks.component';
import { ErrorComponent } from './error/error.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { UserWatchlistComponent } from './user-watchlist/user-watchlist.component';
import { InvalidComponent } from './invalid/invalid.component';


const routes: Routes = [
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'home',
    component: HomeComponent
  },
  {
    path:'edit',
    component: EditComponent
  },
  {
    path:'stocks/:id',
    component: StocksComponent
  },
  {
    path:'watchlist',
    component: UserWatchlistComponent
  },
  {
    path:'invalid',
    component: InvalidComponent
  },
  {
    path:'',
    component: WelcomeComponent
  },
  {
    path:'**',
    component: ErrorComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
