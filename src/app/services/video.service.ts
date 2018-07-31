import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Video } from '../video';

@Injectable()
export class VideoService {

  private _getUrl = '/api/videos';  
  private _postUrl = '/api/video';

  private _updateUrl = '/api/video/';
  private _deleteUrl = '/api/video/';

  constructor(private _http: Http) { }
  ;
  getVideos(){
    return this._http.get(this._getUrl)
      .map((response: Response) => response.json())
  }
  addVideo(video: Video) {
      let headers = new Headers({'Content-Type' : 'application/json'});
      let options = new RequestOptions({headers: headers});
      return this._http.post(this._postUrl, JSON.stringify(video), options)
          .map(( response: Response) => response.json());
  }

  updateVideo(video: Video) {
      let headers = new Headers({'Content-Type' : 'application/json'});
      let options = new RequestOptions({headers: headers});
      console.log(video._id);
      return this._http.put(this._updateUrl + video._id, JSON.stringify(video), options)
          .map(( response: Response) => response.json());
  }
  deleteVideo(video: Video) { 
    console.log('deleting Video' + this._deleteUrl + video._id);
    return this._http.delete(this._deleteUrl + video._id)
    .map(( response: Response) => response.json());
    
  }
}
