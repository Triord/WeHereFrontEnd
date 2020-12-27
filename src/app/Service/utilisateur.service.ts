import { API_URL } from './../app.constants';
import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {
  private readonly noAuthreqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  public readonly  AuthJSON = new HttpHeaders({ 'Content-Type': 'application/json' });
  public readonly RootUrl: string = 'http://localhost:9091/';
  constructor(private http: HttpClient) { }

  getAllStudent(){
    return this.http.get(`${API_URL}allUser`);
  }
  getOneUser(id:any){
    return this.http.get(`${API_URL}UserById/${id}`);
  }
  getAllStudentByClass(annee: any,nomSection: any){
    const params = new HttpParams()
    .set('annee', annee)
    .set('nomSection',nomSection);
    return this.http.get(`${API_URL}studentByClass`,{params});
  }
  testAddFiche(fp){
    return this.http.post(`${API_URL}testAddFiche`,fp);
  }

}
