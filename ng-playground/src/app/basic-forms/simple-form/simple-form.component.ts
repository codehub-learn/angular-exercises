import { Component, OnInit } from '@angular/core';

interface Customer {
  firstName: string;
}

@Component({
  selector: 'app-simple-form',
  templateUrl: './simple-form.component.html',
  styleUrls: ['./simple-form.component.scss']
})
export class SimpleFormComponent implements OnInit {

  model: Customer = { firstName: '' }

  constructor() { }

  ngOnInit(): void {
  }

  capitalize(name: string) {
    this.model.firstName = name.toUpperCase();
  }

}
