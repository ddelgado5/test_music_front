import { Component, OnInit } from '@angular/core';
import { PlayListProvider } from 'src/core/playlist.provider';
import { PlayList } from 'src/models/Song.model';

@Component({
  selector: 'play-list',
  templateUrl: './PlayList.component.html',
  styleUrls: ['./PlayList.component.scss']
})
export class PlayListComponent {
  playLists: PlayList[] = [];

  constructor(
    private playListProvider: PlayListProvider
  ) { }

    ngOnInit() {
      this.playListProvider.playList$.subscribe(playList => {
        this.playLists.push(playList)
      })
    }

}