import { Injectable } from '@angular/core';

@Injectable()
export class SwUrlService {
  private _url = 'api/swFilms2';

  get url() {
    return this._url;
  }
}
