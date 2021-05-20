import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User, userResponse } from '../models/user.interface';
import { catchError, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http:HttpClient) { }

  //metodos

  login(authData:User):Observable<userResponse | void>{
    return this.http.post<userResponse>(`${environment.url}/user/login`,authData)
    .pipe(
      map((res:userResponse)=>{
        console.log('Res->', res);
        this.saveToken(res.apellido);
        return res;
      }),
      catchError((err)=>this.handleError(err))
    );
  }

  logout():void{
    localStorage.removeItem('token');
    //set userIsLogged = false;
  }

  private saveToken(token:string):void{
    localStorage.setItem('token', token);
  }
  private handleError(err: { message: any; }):Observable<never>{
    let errorMessage = 'Error data';
    if(err){
      errorMessage = `Error: code ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

}
