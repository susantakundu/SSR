import { Component, OnInit, Input } from '@angular/core';
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

  ngOnInit() {
  }

  onTitleClick(){
    this.editTitle = true;
  }
  onBlurMethod(){
    this.editTitle = false;
  }
}
