import { Photo } from './../../_models/photo';
import { AuthService } from './../../_services/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { FileUploader } from 'ng2-file-upload';







@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})



export class PhotosComponent implements OnInit {

@Input() photos: Photo[];
uploader: FileUploader ;
hasBaseDropZoneOver =  false;
baseUrl =  'http://localhost:5000/api/'

  constructor(public sanitizer: DomSanitizer, private authService: AuthService) { }

  ngOnInit() {
    this.initializeUploader();
  }


  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

initializeUploader() {
  this.uploader = new FileUploader({
    url: this.baseUrl + 'users/' + this.authService.decodedToken.nameid + '/photos',
    authToken: 'Bearer ' + localStorage.getItem('token'),
    isHTML5: true,
    allowedFileType: ['image'],
    removeAfterUpload: true,
    autoUpload: false,
    maxFileSize: 10 * 1024 * 1024
  });
  this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
  this.uploader.onSuccessItem = (item, respose, status, headers) => {
    if (respose) {
      const res: Photo = JSON.parse(respose);
      const photo = {
          id: res.id,
          url: res.url,
          dateAdded: res.dateAdded,
          description: res.description,
          isMain: res.isMain
        };
      this.photos.push(photo);
    }
  };
}

}
