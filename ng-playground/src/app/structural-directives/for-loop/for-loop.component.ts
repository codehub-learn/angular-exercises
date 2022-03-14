import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-for-loop',
  templateUrl: './for-loop.component.html',
  styleUrls: ['./for-loop.component.scss']
})
export class ForLoopComponent implements OnInit {

  items = ['one', 'two', 'three', 'four', 'five'];

  constructor() { }

  ngOnInit(): void {
  }

}
