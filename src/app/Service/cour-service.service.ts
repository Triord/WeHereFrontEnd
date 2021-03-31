import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../app.constants';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class CourServiceService {

  private readonly noAuthreqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  public readonly  AuthJSON = new HttpHeaders({ 'Content-Type': 'application/json' });
  public readonly RootUrl: string = 'http://localhost:9091/';
  constructor(private http: HttpClient) { }


  getAllCours(){
    return this.http.get(`${API_URL}allCours`);
  }
  getOneCour(id:any){
    return this.http.get(`${API_URL}courById/${id}`);
  }
  getCourByParam(nomCours: any){
    const params = new HttpParams()
    .set('nomCours',nomCours);
    return this.http.get(`${API_URL}courByParam`,{params});
  }
}
