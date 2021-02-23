import { Injectable } from '@angular/core';
import { share } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { NewPlayer } from './interfaces/add-player-interface';

@Injectable()
export class AddPlayerService {
  numberList: any = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  constructor(private http: HttpClient) {}

  addNewPlayer(newPlayerData: NewPlayer): Observable<any> {
    return this.http.post(`/join`, newPlayerData, {
      withCredentials: false,
    });
  }

  getNumberDataList() {
    return this.numberList;
  }
}
