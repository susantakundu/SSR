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

    public newvideoAdding: boolean = false;


    newVideo() {
      this.newvideoAdding = true;
    }

    onSelectVideo(video: any) {
      this.selectedVideo = video;
      this.newvideoAdding = false;
      console.log(this.selectedVideo);
    }


  ngOnInit() {
      this._videoService.getVideos()
        .subscribe(resVideoData => this.videos = resVideoData)
  }
  onUpdateVideoEvent(video: any){
    this._videoService.updateVideo(video)
      .subscribe(resUpdatedVideo => video = resUpdatedVideo);
  }

  // deleting video
  onDeleteVideoEvent(video: any){
    //let videoArray = this.videos;
    //console.log(videoArray);
    console.log(video);
    this._videoService.deleteVideo(video).subscribe( resDeletedVideo  => {
     
        // for(var i=0, i < videoA){
        //   if(videoArray[i]._id === video._id)
        //   {
        //     videoArray.splice(i,1);
        //   }
       // }
       var index = this.videos.indexOf(video, 0);
        if (index > -1)
        {
            this.videos.splice(index, 1);
        }
       //videoArray.splice(resDeletedVideo._id, 1)
      this.selectedVideo= null;
    });
  }
  onSubmitAddVideo(video: Video){
      this._videoService.addVideo(video)
          .subscribe(resnewVideo => {
              this.videos.push(resnewVideo);
              this.newvideoAdding = false;
              this.selectedVideo = resnewVideo;
          })
  }

}
