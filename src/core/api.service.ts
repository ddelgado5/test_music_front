import { Injectable } from "@angular/core";
import { tap } from 'rxjs/operators'
import { Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
// Environment
import { environment } from '@environments/environment'
// Services
import { SessionStorageService } from "./sesion-storage.service";

import { PlayList } from "src/models/Song.model";
import { IUser } from "src/models/IUser.model";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient,
    private sessionStorageService: SessionStorageService
  ) {
  }

  private getUrl = () => environment.API_URL

  /**
   * Get all playList from API
   * @returns listas de reproducción
   */
  getPlayLists() {
    return this.http.get<PlayList[]>(`${this.getUrl()}/lists`)
  }

  /**
   * Get a playList from API
   * @returns lista de reproducción
   */
  getPlayListByName(name: string) {
    return this.http.get<PlayList>(`${this.getUrl()}/lists/${name}`)
  }

  /**
   * save a playList
   */
  savePlayList(playList: PlayList) {
    return this.http.post(`${this.getUrl()}/lists/`, playList)
  }

  /**
   * Delete a playList
   */
  deletePlayList(name: string) {
    return this.http.delete(`${this.getUrl()}/lists/${name}`)
  }

  /**
   * Allow singin to API
   */
  login(credentials: IUser) {
    return this.http.post<any>(`${this.getUrl()}/login`, credentials)
      .pipe(
        tap(res => {
          console.log('res: ', res);
          const { token } = res;
          console.log('token: ', token);
          this.sessionStorageService.set('token', token as string)
        })
      )
  }




}