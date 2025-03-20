import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Practice2Component } from './components/practice2/practice2.component';
import { Practice3Component } from './components/practice3/practice3.component';
import { Practice4Component } from './components/practice4/practice4.component';
import { Practice1Component } from './practice1/practice1.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';

export const routes: Routes = [
  { 
    path:'',
    redirectTo:'practice1',
    pathMatch:'full'
  },
  { 
    path:'practice2',
    component:Practice2Component
  },
  { 
    path:'practice3',
    component:Practice3Component
  },
  {  
    path:'practice4',
    component:Practice4Component
  },
  { 
    path:'practice1',
    component:Practice1Component
  },
  { 
    path:'**',
    component:PagenotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],//routes will be applicable for the entire application
  exports: [RouterModule]
})
export class AppRoutingModule { }
