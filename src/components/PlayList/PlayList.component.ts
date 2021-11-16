import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { PlayListProvider } from 'src/core/playlist.provider';
import { PlayList } from 'src/models/Song.model';

@Component({
  selector: 'play-list',
  templateUrl: './PlayList.component.html',
  styleUrls: ['./PlayList.component.scss']
})
export class PlayListComponent {

  playLists: PlayList[] = [];
  selectedPlayList!: PlayList;

  @ViewChild('modalRef', {static: false}) modalRef!: ElementRef;

  constructor(
    private playListProvider: PlayListProvider,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.playListProvider.playList$.subscribe(playList => {
      this.playLists.push(playList)
    })
  }

  removePlayList(name: string) {
    this.playLists = this.playLists.filter(item => item.nombre != name)
  }

  showPlayList(item: PlayList) {
    this.selectedPlayList = item;
    this.renderer.setStyle(this.modalRef.nativeElement, 'display', 'block')
  }

  closeModal(){
    this.renderer.setStyle(this.modalRef.nativeElement, 'display', 'none')
  }

}