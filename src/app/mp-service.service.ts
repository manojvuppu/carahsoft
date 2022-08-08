import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable()
export class MpServiceService {


  private searchtext = new BehaviorSubject('');
  searchedWord = this.searchtext.asObservable();


  constructor() { }

  changeMessage(message: string) {
    this.searchtext.next(message)
  }


}