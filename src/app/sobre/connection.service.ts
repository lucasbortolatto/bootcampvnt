import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class ConnectionService {

  private restURL: string = 'https://jsonplaceholder.typicode.com/users';

  constructor(private _http: HttpClient) { }
1
  public getUsers(): Observable<any> {
    return this._http.get(this.restURL);

  }

}
