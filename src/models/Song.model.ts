export interface Song {
  titulo: string,
  artista: string,
  album: string,
  anno: string,
  listaDeReproducciones: number
}

export interface PlayList {
  id?: number;
  nombre: string,
  descripcion: string,
  cancion: Song[],
}