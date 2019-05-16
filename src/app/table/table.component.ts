import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data: any = [
    {
      id: 0,
      firstName: "adam",
      lastName: "ero",
      age: 50
    },
    {
      id:1,
      firstName: "ethadam",
      lastName: "er23o",
      age: 20
    },
    {
      id:2,
      firstName: "a1232dam",
      lastName: "e132ro",
      age: 34
    },
    {
      id:3,
      firstName: "atton",
      lastName: "edhjksad",
      age: 23
    }
  ]

  fn: string;
  ln: string;
  age: string;




  
  constructor() { }

  ngOnInit() {
  }
  remove(sdid){
    for(let person of this.data ){
      if(person.id===sdid) {
        this.data.splice(sdid,1);
      }
      
    }
  }
  add() {
    this.data.push({
      id:this.data.length-1,
      firstName: this.fn,
      lastName: this.ln,
      age: this.age
      });
  }

  update(sdid) {
    for(let person of this.data) {
      if(person.id === sdid){
        person.firstName = this.fn;
        person.lastName = this.ln;
        person.age = this.age;
      }
    }
  }
  clear() {
    this.fn = '';
    this.ln = '';
    this.age = '';
  }

}