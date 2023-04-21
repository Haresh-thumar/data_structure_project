import { Component, ErrorHandler, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';
import { Subject, from, map } from 'rxjs';

@Component({
  selector: 'app-get-image',
  templateUrl: './get-image.component.html',
  styleUrls: ['./get-image.component.scss']
})
export class GetImageComponent implements OnInit {

  isLoader: Subject<boolean> = this.loader.isLoading;

  constructor(private api: UserDataService, private loader: UserDataService) { }

  ngOnInit(): void { }

  /*----------- Get-Image from Url with Loader -----------*/
  images: any;
  getImagesFromApi(event: any) {
    event.disabled = true;
    this.loader.showLoader();
    this.api.getImg().subscribe({
      next: (res: any) => {
        this.images = res;
      },
      error: (err: ErrorHandler) => {
        console.log(err);
        event.target.disabled = false;
      },
      complete: () => {
        console.log('Image Get Successfully');
        this.loader.stopLoader();
        event.target.disabled = false;
      }
    })
  }










}
