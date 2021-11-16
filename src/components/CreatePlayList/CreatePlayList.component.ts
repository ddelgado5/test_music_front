import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PlayList, Song } from 'src/models/Song.model';

@Component({
  selector: 'create-play-list-root',
  templateUrl: './CreatePlayList.component.html',
  styleUrls: ['./CreatePlayList.component.scss']
})
export class CreatePlayListComponent {

  form!: FormGroup
  formSong!: FormGroup

  playList: PlayList = {
    nombre:"",
    description:"",
    songs: []
  };

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.buildForm()
  }

  ngOnInit(): void {
    
  }

  buildForm(): void {
    // Build form
    this.form = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
      description: ['', Validators.required]
    });

    this.formSong = this.formBuilder.group({
      title: ['', Validators.compose([Validators.required, Validators.maxLength(50)])],
      artist: ['', Validators.required],
      album: ['', Validators.required],
      year: ['', Validators.required]
    })
  }

  saveSong(song: Song){
    const songAux: Song = {
      album: this.formSong.value.album,
      titulo: this.formSong.value.title,
      artista: this.formSong.value.artist,
      anno: this.formSong.value.year
    }
    console.log('songAux: ', songAux);
    this.playList.songs.push(songAux)
    this.formSong.reset()
  }

  savePlayList(){
    if(!this.playList.songs.length){
      return
    }

    this.form.reset
  }

}