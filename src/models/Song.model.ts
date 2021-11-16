export interface Song {
  titulo: string,
  artista: string
  album: string,
  anno: string
}

export interface PlayList {
  nombre: string,
  description: string
  songs: Song[],
}