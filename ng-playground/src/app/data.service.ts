import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getData() {
    return ['one', 'two', 'three'];
  }
}
