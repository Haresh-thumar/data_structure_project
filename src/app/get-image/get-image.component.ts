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

  /*----------- Get-Image Api call with Loader & Disable Window Pointer Events -----------*/
  images: any;
  getImagesFromApi() {
    this.loader.showLoader();
    this.api.getImg().subscribe({
      next: (res: any) => {
        this.images = res;
      },
      error: (err: ErrorHandler) => {
        console.log(err);
        // this.loader.stopLoader();
      },
      complete: () => {
        console.log('Image Get Successfully');
        this.loader.stopLoader();
      }
    })
  }


/*----------- Observable call with Button Disabled -----------*/
  thirdMethod(event: any) {
    event.target.disabled = true;
    setTimeout(() => {
      from([50, 15, 20, 30, 40])
        .pipe(
          map(item => item * 2)
        )
        .subscribe(
          item => console.log(`Resulting item...${item}`),
          err => console.log(`Error Ocurred ${err}`),
          () => console.log(`Completed`)
        )
      event.target.disabled = false;
    }, 2000)
  }


}
