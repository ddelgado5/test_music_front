import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePlayListComponent } from 'src/components/CreatePlayList/CreatePlayList.component';
import { LayoutComponent } from 'src/components/Layout/Layout.component';
import { LoginComponent } from 'src/components/Login/Login.component';
import { PlayListComponent } from 'src/components/PlayList/PlayList.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'lista', component: LayoutComponent },
  { path: '**', component: CreatePlayListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }