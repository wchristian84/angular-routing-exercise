import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AboutComponent } from "./about/about.component";
import { BobComponent } from "./about/bob/bob.component";
import { SusanComponent } from "./about/susan/susan.component";
import { ContactComponent } from "./contact/contact.component";
import { ErrorPageComponent } from "./error-page/error-page.component";
import { HomeComponent } from "./home/home.component";

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent, children: [
    { path: 'bob', component: BobComponent },
    { path: 'susan', component: SusanComponent }
  ]},
  { path: 'contact', component: ContactComponent },
  { path: '**', component: ErrorPageComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
