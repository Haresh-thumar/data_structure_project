import { Component, ErrorHandler, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-get-image',
  templateUrl: './get-image.component.html',
  styleUrls: ['./get-image.component.scss']
})
export class GetImageComponent implements OnInit {
  constructor(private api: UserDataService) { }

  images: any;

  ngOnInit(): void { }

  getImagesFromApi() {
    this.api.getImg().subscribe({
      next: (res:any) => this.images = res,
      error: (err:ErrorHandler) => console.log(err),
      complete: () => console.log('Image Get Successfully'),
    })
  }


}
