import { DataHTTPService } from './../services/data.service';
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

@Injectable()
export class DataResolver implements Resolve<any> {

  constructor(
    private dataService: DataHTTPService,
  ) { }


  resolve(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this.dataService.findData();
  }

}
