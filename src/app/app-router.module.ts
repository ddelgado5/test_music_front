import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatePlayListComponent } from 'src/components/CreatePlayList/CreatePlayList.component';
import { PlayListComponent } from 'src/components/PlayList/PlayList.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', component: PlayListComponent },
  { path: 'list', component: AppComponent },
  { path: 'create', component: CreatePlayListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }