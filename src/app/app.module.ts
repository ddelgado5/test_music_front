import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-router.module';
import {
  HttpClientModule,
} from '@angular/common/http';
// Components
import { AppComponent } from './app.component';
import { PlayListComponent } from 'src/components/PlayList/PlayList.component';
import { CreatePlayListComponent } from 'src/components/CreatePlayList/CreatePlayList.component';
import { HeaderComponent } from 'src/components/Header/Header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    PlayListComponent,
    CreatePlayListComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
