import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { StandardData } from '../entities/standard-data';

@Injectable({
  providedIn: 'root'
})
export class StandardDataService {

  constructor() { }

  private standardData = new BehaviorSubject<StandardData | null>(null);
  standardDataChanges = this.standardData.asObservable();

  getCurrentValue() {
    this.standardData.getValue();
  }

  addNewValue(newValue: StandardData) {
    this.standardData.next(newValue);
  }
  closeTheDataFlow() {
    this.standardData.complete();
  }
}
