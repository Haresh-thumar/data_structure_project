import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { UserDataService } from './services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'data_structure_project';

  isLoader: Subject<boolean> = this.loader.isLoading;

  constructor(private loader:UserDataService) { }
}
