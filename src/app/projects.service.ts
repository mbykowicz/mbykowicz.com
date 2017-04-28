import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import "rxjs/add/operator/map";

@Injectable()
export class ProjectsService {
  private _url : string = "../../assets/data/projects.json";
  constructor(private _http : Http) { }

  getProjects() {
    return this._http.get(this._url).map((response : Response) => response.json());
  }

}
