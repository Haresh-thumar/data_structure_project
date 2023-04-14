import { Component, OnInit } from '@angular/core';
import { Set, Map } from 'immutable';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {


  constructor(){console.clear();}



/*----- set method -----*/
  mapMethod1(){
    let map1 = Map();
    map1.set(1, 'abhishek');
    map1.set(2, 'abhishek');
    map1.set('abhishek', 2 );
    map1.set(2, 2 );
    map1.set('abhishek', 'abhishek');
    map1.set(1, 'haresh');
    console.log(map1);
  }

  /*----- get method -----*/
  mapMethod2(){
    let map2 = Map();
    map2.set(1, 'abhishek');
    map2.set(2, 'abhishek');
    map2.set('abhishek', 2 );
    map2.set(2, 2 );
    map2.set('abhishek', 'abhishek');
    console.log(map2.get(2));
  }

  /*----- has method -----*/
  mapMethod3(){
    let map3 = Map();
    map3.set(1, 'abhishek');
    map3.set(2, 'abhishek');
    map3.set('abhishek', 2 );
    map3.set(2, 2 );
    map3.set('abhishek', 'abhishek');
    console.log(map3.has(2));
  }

  /*----- delete method -----*/
  mapMethod4(){
    let map4 = Map();
    map4.set(1, 'abhishek');
    map4.set(2, 'abhishek');
    map4.set('abhishek', 2 );
    map4.set(2, 2 );
    map4.set('abhishek', 'abhishek');
    map4.delete(3)
    console.log(map4.delete(3));
    console.log(map4);
  }

  /*----- size method -----*/
  mapMethod5(){
    let map5 = Map();
    map5.set(1, 'abhishek');
    map5.set(2, 'abhishek');
    map5.set('abhishek', 2 );
    map5.set(2, 2 );
    map5.set('abhishek', 'abhishek');
    console.log(map5);
    console.log(map5.size);
  }

   /*----- clear method -----*/
   mapMethod6(){
    let map6 = Map();
    map6.set(1, 'abhishek');
    map6.set(2, 'abhishek');
    map6.set('abhishek', 2 );
    map6.set(2, 2 );
    map6.set('abhishek', 'abhishek');
    console.log(map6.clear());
  }

  /*----- Duplicate Value Removed -----*/
  duplicateRemove(){
    let Map7 = Map();
    Map7.set({a:1, b:2}, "Haresh"); 
    Map7.set({a:1, b:2}, "Rutvik"); 
  }



  ngOnInit(): void {
      // this.mapMethod1();
      // this.mapMethod2();
      // this.mapMethod3();
      // this.mapMethod4();
      // this.mapMethod5();
      // this.mapMethod6();
  }

}
