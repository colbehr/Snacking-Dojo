import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "./login/login.component"
import { SnackingdojoComponent } from "./snackingdojo/snackingdojo.component"
import { DetailsComponent } from "./snackingdojo/details/details.component"

const routes: Routes = [
    { path: "", component: SnackingdojoComponent },
    { path: "details", component: DetailsComponent },
    // { path: "", pathMatch: "full", redirectTo: "/questions" }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
