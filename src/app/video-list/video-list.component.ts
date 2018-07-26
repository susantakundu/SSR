import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  outputs: ['selectVideo'],
  inputs: ['videos']
  
})
export class VideoListComponent implements OnInit {
  //title = 'hello';
  constructor() { }
  @Output() selectVideo = new EventEmitter();

  @Input() videos: Video;
  //@Output() video: Video;

  ngOnInit() {
  }
  
  onselect(vid : Video) {
    this.selectVideo.emit(vid);
  }
   
}
