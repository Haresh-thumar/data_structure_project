import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  DataSourceUrl: string = 'http://localhost:3000/posts';

  constructor(private http: HttpClient) { }

  /************ Post Student Methods ************/
  postUsers(data: any) {
    return this.http.post<any>(this.DataSourceUrl, data)
  }

  /************ Get Student Methods ************/
  getUsers() {
    return this.http.get<any>(this.DataSourceUrl);
  }

  /************ Delete Student Methods ************/
  deleteusers(id: number) {
    return this.http.delete<any>(`${this.DataSourceUrl}/${id}`);
  }



  /********************** JsonPlaceholder Api ***********************/
  getImg(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/photos');
  }

  
}
