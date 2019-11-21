import { UserService } from "src/app/_services/user.service";
import { Photo } from "./../../_models/photo";
import { AuthService } from "./../../_services/auth.service";
import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { DomSanitizer } from "@angular/platform-browser";
import { FileUploader } from "ng2-file-upload";
import { ToastrServiceService } from "src/app/_services/toastrService.service";

@Component({
  selector: "app-photos",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.css"]
})
export class PhotosComponent implements OnInit {
  @Input() photos: Photo[];
  @Output() getUserPhotoChange = new EventEmitter<string>();
  uploader: FileUploader;
  hasBaseDropZoneOver = false;
  baseUrl = "http://localhost:5000/api/";
  currentMain: Photo;

  constructor(
    public sanitizer: DomSanitizer,
    private authService: AuthService,
    private userService: UserService,
    private alert: ToastrServiceService
  ) {}

  ngOnInit() {
    this.initializeUploader();
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  initializeUploader() {
    this.uploader = new FileUploader({
      url:
        this.baseUrl +
        "users/" +
        this.authService.decodedToken.nameid +
        "/photos",
      authToken: "Bearer " + localStorage.getItem("token"),
      isHTML5: true,
      allowedFileType: ["image"],
      removeAfterUpload: true,
      autoUpload: false,
      maxFileSize: 10 * 1024 * 1024
    });
    this.uploader.onAfterAddingFile = file => {
      file.withCredentials = false;
    };
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

  setMainPhoto(photo: Photo) {
    this.userService
      .setMainPhoto(this.authService.decodedToken.nameid, photo.id)
      .subscribe(
        () => {
          console.log("sukces");
          this.currentMain = this.photos.filter(p => p.isMain === true)[0];
          this.currentMain.isMain = false;
          photo.isMain = true;
          this.authService.changeUserPhoto(photo.url);
          this.authService.currentUser.photoUrl = photo.url;
          localStorage.setItem(
            "user",
            JSON.stringify(this.authService.currentUser)
          );
        },
        error => {
          this.alert.showError(error);
        }
      );
  }

  deletePhoto(id: number){
    this.userService.deletePhoto(this.authService.decodedToken.nameid, id).subscribe(() => {
      this.photos.splice(this.photos.findIndex(p => p.id === id), 1);
      console.log('Zdjecie zostało usunięte');
    }, error => {
      console.log('Nie udało się usunąć zdjęcia');
    });
  }
}


// Tomek modyfikacje
