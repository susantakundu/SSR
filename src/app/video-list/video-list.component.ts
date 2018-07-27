import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  inputs: ['videos'],
  outputs: ['SelectVideo']
  
})
export class VideoListComponent implements OnInit {
  //title = 'hello';
  constructor() { }
  @Output() SelectVideo = new EventEmitter();

  @Input() videos: Video;
  //@Output() video: Video;

  ngOnInit() {
  }
  
  onSelect(vid : Video) {
    this.SelectVideo.emit(vid);
  }
   
}
