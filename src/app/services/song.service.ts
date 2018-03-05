import { Injectable } from '@angular/core';
import { Song } from '../shared/song';
import { Observable } from 'rxjs/Observable';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "angularfire2/firestore";
import { firestore } from "firebase";

@Injectable()
export class SongService {

  songsCol: AngularFirestoreCollection<Song>;
  songs: Observable<Song[]>;


  constructor(private db: AngularFirestore) {  }

  // Return an observable list of Items
  getSongList(): Observable<Song[]> {
    this.songsCol = this.db.collection("songs");
    return (this.songs = this.songsCol.snapshotChanges().map(actions => {
      return actions.map(a => {
        const song = a.payload.doc.data() as Song;
        song.documentid = a.payload.doc.id;
        return song;
      });
    }));
  }

  
}
