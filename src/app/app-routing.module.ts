import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { AcceuilleComponent } from './acceuille/acceuille.component';
import { HexComponent } from './hex/hex.component';
import { DotsComponent } from './dots/dots.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  
    {path:'',component:InscriptionComponent},
    {path:'login',component:LoginComponent},
      {path:'acceuille',component:AcceuilleComponent},
      {path:'HEX',component:HexComponent},
      {path:'Dots',component:DotsComponent},
      {path:'About',component:AboutComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
