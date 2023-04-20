import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-single-click-event',
  templateUrl: './single-click-event.component.html',
  styleUrls: ['./single-click-event.component.scss']
})
export class SingleClickEventComponent implements OnInit {

  // For Use Only Add/Remove Class
  submitted: boolean = false;
  // For use only store params Id
  userId: any;
  // Form Group
  addStudentForm!: FormGroup;
  // create a New Student Object Model
  studentModelObj: studentModel = new studentModel();

  getUser: any;

  constructor(private Api: UserDataService, private formbuilder: FormBuilder) { }


  ngOnInit(): void {
    /*========== Assign New FormGroup with Form validation ==========*/
    this.addStudentForm = this.formbuilder.group({
      id: [''],
      name: ['', [Validators.required, Validators.maxLength(30)]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      age: ['', [Validators.required, Validators.maxLength(3), Validators.pattern('^[0-9]*$')]],
      mobile: ['', [Validators.required, Validators.maxLength(10), Validators.pattern("^((\\+91-?)|0)?[0-9]{10}$")]],
      aadhar: ['', [Validators.required, Validators.maxLength(12)]],
      pancard: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
    })
  }


  /*========== convenience getter for easy access to form fields ==========*/
  get f() { return this.addStudentForm.controls; }


  /**************************************************************************************
                                    Add Student
  **************************************************************************************/
  postStudent() {
    /*--------- form valid after submit ---------*/
    if (this.addStudentForm.invalid) {
      return;
    }
    /*--------- Post Student Form Data & call api ---------*/
    this.Api.postUsers(this.addStudentForm.value).subscribe({
      next: (res) => {
        console.log(res);
      },
      error: (err) => { console.log('Student Adding While Fetching Error', err) },
      complete: () => {
        console.log('Create Use successfully!!');
        // Reset Form
        this.addStudentForm.reset(this.addStudentForm = new FormGroup({}));
      }
    })
  }



/**********************************************************************************************************
                                              Get User Data
***********************************************************************************************************/
  getUserData() {
    this.Api.getUsers().subscribe({
      next: (res) => {
        console.log(res);
        this.getUser = res;
      },
      error: (err) => console.warn('User Not Fetch...!', err),
      complete: () => console.log('User Fetch Successfully !!')
    })
  } 


}




/*---- Student Object Model for addStudentForm ----*/
export class studentModel {
  id: number = 0;
  name: string = '';
  email: string = '';
  age: number = 0;
  mobile: number = 0;
  aadhar: number = 0;
  pancard: string = '';
}