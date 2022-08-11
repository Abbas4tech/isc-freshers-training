import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { CommonService } from '../services/common.service';
import { Universities } from '../services/model/common.model';

@Injectable({
  providedIn: 'root',
})
export class DetailedpageResolver implements Resolve<Universities> {
  constructor(private _common: CommonService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Universities> {
    const id = route.params['id'];
    console.log(id);
    return this._common.getUniversityFromId(id);
  }
}
