import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Video } from '../video';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css']
})
export class VideoDetailComponent implements OnInit {

  constructor() { }

  public editTitle: boolean = false;

  @Input() video;
  @Output() updateVideoEvent = new EventEmitter();
  @Output() deleteVideoEvent = new EventEmitter();

  ngOnInit() {
  }
  @ViewChild("myInput") inputEl: ElementRef;

  onTitleClick(){
    this.editTitle = true;
    setTimeout(()=>{
      this.inputEl.nativeElement.focus();
    },100);
  }
  onBlurMethod(){
    console.log('focus out');
    this.editTitle = false;
  }
  updateVideo() {
    this.updateVideoEvent.emit(this.video);
  }
  deleteVideo(){
    this.deleteVideoEvent.emit(this.video);
  }
}
