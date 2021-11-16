import { Injectable } from "@angular/core"
import { Subject } from "rxjs"
import { PlayList } from "src/models/Song.model"

@Injectable({
  providedIn: 'root'
})
export class PlayListProvider {

  private playList = new Subject<PlayList>()
  playList$ = this.playList.asObservable();  

  constructor() { }

  addPlayList(playList: PlayList) {
    this.playList.next(playList)
  }

}