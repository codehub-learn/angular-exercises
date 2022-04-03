import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  basicForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl('')
  });
  programmingLanguages = ['TS', 'JS', 'C#'];

  constructor() { }

  ngOnInit(): void {
  }

}
