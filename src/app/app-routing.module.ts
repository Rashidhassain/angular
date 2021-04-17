import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { FooterComponent } from './footer/footer.component';
import { DemoComponent } from './demo/demo.component';


const routes: Routes = [
  
  {path: 'header', component: HeaderComponent},
  {path: 'main', component: MainComponent},
  {path: 'footer', component: FooterComponent},
 
  {path: 'demo', component: DemoComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
