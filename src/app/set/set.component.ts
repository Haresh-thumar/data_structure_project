import { Component, OnInit } from '@angular/core';
import { Set, Map } from 'immutable';


@Component({
  selector: 'app-set',
  templateUrl: './set.component.html',
  styleUrls: ['./set.component.scss']
})

export class SetComponent implements OnInit {

  constructor() { console.clear() }


  /*--================================= Add method =================================--*/
  setmethod1() {
    let set1: any = Set();
    set1.add(5);
    set1.add("Haresh");
    set1.add("Haresh");
    set1.add("kishan");
    set1.add([1, 2, 3], [1, 2, 4]);
    set1.add([1, 2, 3], [1, 2, 3]);
    set1.add({ a: 1, b: 2 }, { c: 1, d: 2 });
    set1.add({ a: 1, b: 2 }, { a: 3, b: 4 });
    console.log(set1);
  }


  // remove duplicate from set
  duplicateRemoveFromSet() {
    let carObj1 = { 'car': 'Brezza', 'color': 'black', 'model': '2018', 'milage': 30 };
    let carObj2 = { 'car': 'Honda-City', 'color': 'silver', 'model': '2021', 'milage': 19 };
    let carObj3 = { 'car': 'Nexon', 'color': 'Blue', 'model': '2023', 'milage': 25 };
    let carObj4 = { 'car': 'Honda-City', 'color': 'silver', 'model': '2021', 'milage': 19 };
    let carObj5 = { 'car': 'Nexon', 'color': 'Blue', 'model': '2023', 'milage': 25 };
    let carObj6 = { 'car': 'Brezza', 'color': 'black', 'model': '2018', 'milage': 30 };
    let set1 = Set();
    set1 = set1.add(Map(carObj1));
    set1 = set1.add(Map(carObj2));
    set1 = set1.add(Map(carObj3));
    set1 = set1.add(Map(carObj4));
    set1 = set1.add(Map(carObj5));
    set1 = set1.add(Map(carObj6));
    console.log(set1.toJS());
  }

  // remove duplicate from two set
  duplicateFromSecondSet() {
    let set1: any = Set();
    let set2: any = Set();
    set1.add(5);
    set1.add("Haresh");
    set1.add("Haresh");
    set1.add("kishan");
    set1.add([1, 2, 3], [1, 2, 4]);
    set2.add([1, 2, 3], [1, 2, 3]);
    set1.add({ a: 1, b: 2 }, { c: 1, d: 2 });
    set2.add({ a: 1, b: 2 }, { a: 3, b: 4 });
    console.log(set1);
  }


  otherExample() {
    const letters = Set(["a", "b", "c"]);
    // List all Elements
    let text = "";
    letters.forEach(res => {
      text += res + "<br>";
    })
    // print Object Element
    console.log(letters);
  }


  /*--================================= Has method ====================================--*/
  setmethod2() {
    let set2: any = Set();
    set2.add({ aa: 11, bb: 22 });
    set2.add({ aa: 11, bb: 22 });
    set2.add(3);
    set2.add(4);
    set2.add(5).add(6).add(7).add(8);
    console.log(set2.has(22));
  }


  /*--================================= Delete method =================================--*/
  setmethod3() {
    let set3: any = Set();
    set3.add(1);
    set3.add({ aa: 11, bb: 22 }, { cc: 11, dd: 22 });
    set3.add({ aa: 11, bb: 22 }, { cc: 11, dd: 22 });
    set3.add(3);
    set3.add(4);
    set3.add(4);
    set3.add(5).add(6).add(7).add(8);
    set3.delete(5)
    console.log(set3.delete(10));
    console.log(set3);
  }


  /*--================================= Size method ===================================--*/
  setmethod4() {
    let set4: any = Set();
    set4.add(1);
    set4.add([1, 2, 3]);
    set4.add({ aa: 11, bb: 22 });
    set4.add(3);
    set4.add(4);
    set4.add(4);
    set4.add(5).add(6).add(7).add(8);
    console.log(set4.size);
  }


  /*--================================= Size method ===================================--*/
  setmethod5() {
    let set4: any = Set();
    set4.add(1);
    set4.add([1, 2, 3]);
    set4.add({ aa: 11, bb: 22 });
    set4.add(3);
    set4.add(4);
    set4.add(4);
    set4.add(5).add(6).add(7).add(8);
    set4.clear();
    console.log(set4)
  }



  ngOnInit(): void {
    // this.setmethod1();
    // this.otherExample();
    // this.duplicateFromSecondSet();
    this.duplicateRemoveFromSet();
    // this.setmethod2();
    // this.setmethod3();
    // this.setmethod4();
    // this.setmethod5();

    /*--------other example-------*/
    // this.method1()
  }


  // How to get an intersection of two sets?
  // method1() {
  //   const set1 = new Set([1, 2, 3]);
  //   const set2 = new Set([5, 3, 2]);
  //   const intersection = new Set([...set1].filter(x => set2.has(x)));
  //   console.log(intersection.keys()); // Outputs  [ 2, 3 ]
  // }

}
