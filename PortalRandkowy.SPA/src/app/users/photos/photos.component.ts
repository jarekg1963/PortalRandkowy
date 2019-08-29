import { Component, OnInit, Input } from '@angular/core';
import { Photo } from 'src/app/_models/photo';
import { DomSanitizer } from '@angular/platform-browser';





@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})



export class PhotosComponent implements OnInit {

@Input() photos: Photo[];

  constructor(public sanitizer: DomSanitizer) { }

  ngOnInit() {
  }

}
