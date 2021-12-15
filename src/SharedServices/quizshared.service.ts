import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuizsharedService {
 public _Url="http://localhost:3000/Questions";
 public _url1="http://localhost:5000/UserResult"
  constructor(private http:HttpClient) { }

getQuestions(id:any):Observable<any>{
  // console.log(id);
  return this.http.get(this._Url+`?id=${id}`);
}
getTotaldata():Observable<any>{
  return this.http.get(this._Url);
}
//post method the user result

 PostUserResult(data:any):Observable<any>{
   return this.http.post(this._url1,data)
 }
 getResult(id:any):Observable<any>{
   return this.http.get("http://localhost:5000/UserResult/"+id);
 }
 answerget():Observable<any>{
   return this.http.get("http://localhost:3000/answers")
 }
}
