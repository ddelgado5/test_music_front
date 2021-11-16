// Modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-router.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  HttpClientModule, HTTP_INTERCEPTORS,
} from '@angular/common/http';
// Components
import { AppComponent } from './app.component';
import { PlayListComponent } from 'src/components/PlayList/PlayList.component';
import { CreatePlayListComponent } from 'src/components/CreatePlayList/CreatePlayList.component';
import { HeaderComponent } from 'src/components/Header/Header.component';
// Interceptors
import { TokenInterceptor } from 'src/core/token.interceptor';
import { LoginComponent } from 'src/components/Login/Login.component';
import { LayoutComponent } from 'src/components/Layout/Layout.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayListComponent,
    CreatePlayListComponent,
    HeaderComponent,
    LoginComponent,
    LayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
