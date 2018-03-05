import { Component, OnInit } from '@angular/core';
import { SongService } from '../../services/song.service';
import { Song } from '../../shared/song';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-songlist',
  templateUrl: './songlist.component.html',
  styleUrls: ['./songlist.component.css']
})
export class SonglistComponent implements OnInit {

  songs: Observable<Song[]>;
  showSpinner = true;

  constructor(private songService: SongService) {
    this.songs = this.songService.getSongList();
   }

  ngOnInit() {
    this.songs.subscribe((x) => {
      this.showSpinner = false;
    });
  }

}
