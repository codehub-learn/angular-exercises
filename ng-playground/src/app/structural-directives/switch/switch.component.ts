import { Component, OnInit } from '@angular/core';

interface Person {
  name: string;
  age: number;
  country: string;
}

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.scss']
})
export class SwitchComponent implements OnInit {

  people: Person[] = [
    {
      name: 'John',
      age: 50,
      country: 'USA'
    },
    {
      name: 'David',
      age: 37,
      country: 'UK'
    },
    {
      name: 'Maria',
      age: 20,
      country: 'GR'
    },
    {
      name: 'Steve',
      age: 33,
      country: 'NL'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
