import { ConsultActiviteComponent } from './consult-activite/consult-activite.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path:'consultAct',
    component: ConsultActiviteComponent
  },
  {
    path:'consultAct/:msg', 
    component: ConsultActiviteComponent
  },
  {
    path:'consultAct/:msg/:msg1', 
    component: ConsultActiviteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
