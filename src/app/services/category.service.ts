import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http:HttpClient) { }

  list(): Observable<any>{
    return this.http.get(environment.baseUrl+"/categories")
      .pipe(map(data=>data))
  }
  savedept(dept: Department): Observable<any>{
  console.log(dept)
  let url = '/savedept';
  if(dept.id){
  url='/updatedept';
  }
  return this.http.post(environment.baseUrl+'/savedept',dept)
  .pipe(map(data => data))
    }
    getDepartmentById(Id:string): Observable<any>{
    return this.http.get(environment.baseUrl+'/deptById/'+id, null)
          .pipe(map(data=>data))
    }
}


