import { AuthService } from './../../_services/auth.service';
import { Component, OnInit, Input } from '@angular/core';
import { Photo } from 'src/app/_models/photo';
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
}


}
