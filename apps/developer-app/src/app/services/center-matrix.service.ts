import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CenterMatrix } from '../model';

@Injectable({
  providedIn: 'root'
})
export class CenterMatrixService {

  constructor(private http: HttpClient) { }

  createNewCenterMatrix(matrixValue: CenterMatrix): Observable<any> {
    const url = `http://localhost:3400/api/center-matrix`;
    return this.http.post<Omit<CenterMatrix, 'id'>>(url, matrixValue);
  }

  //matrixValue: Omit<CenterMatrix, 'id'>
  updateNewCenterMatrix(matrixValue: CenterMatrix, matrixId: string | null | undefined): Observable<any> {
    const url = `http://localhost:3400/api/center-matrix/${matrixId}`;
    return this.http.put<Omit<CenterMatrix, 'id'>>(url, matrixValue);
  }

  getAllCenterMatrix(): Observable<any> {
    const url = `http://localhost:3400/api/center-matrix`;
    return this.http.get(url);
  }

  getCenterMatrixById(idMatrix: string | null): Observable<any> {
    const url = `http://localhost:3400/api/center-matrix/${idMatrix}`;
    return this.http.get(url);
  }

  deleteCenterMatrixById(idMatrix: number | undefined): Observable<any> {
    const url = `http://localhost:3400/api/center-matrix/${idMatrix}`;
    return this.http.delete(url);
  }

}
