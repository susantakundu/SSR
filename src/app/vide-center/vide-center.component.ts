import { Component, OnInit, Input } from '@angular/core';
import { Video } from './../video';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-vide-center',
  templateUrl: './vide-center.component.html',
  styleUrls: ['./vide-center.component.css'],
  outputs:['video'],
  providers: [VideoService]
 
})
export class VideCenterComponent implements OnInit {

  constructor(private _videoService: VideoService) { }
  
  //  videos: Video[] = [
  //     {"_id":"1", "title":"title 1", "url": "url1", "description": "description 1"},
  //     {"_id":"2", "title":"title 2", "url": "url2", "description": "description 2"},
  //     {"_id":"3", "title":"title 3", "url": "url3", "description": "description 3"},
  //     {"_id":"4", "title":"title 4", "url": "url4", "description": "description 4"}
  //   ]
    videos: Array<Video>;

    selectedVideo: Video;

    onSelectVideo(video: any) {
      this.selectedVideo = video;
      console.log(this.selectedVideo);
    }


  ngOnInit() {
      this._videoService.getVideos()
        .subscribe(resVideoData => this.videos = resVideoData)
  }

}
