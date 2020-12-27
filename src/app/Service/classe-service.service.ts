import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_URL } from '../app.constants';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ClasseServiceService {
  private readonly noAuthreqHeader = new HttpHeaders({ 'No-Auth': 'True' });
  public readonly  AuthJSON = new HttpHeaders({ 'Content-Type': 'application/json' });
  public readonly RootUrl: string = 'http://localhost:9091/';
  constructor(private http: HttpClient) { }

  getOneClasse(id:any){
    return this.http.get(`${API_URL}classeById/${id}`);
  }
  getAllClasse(){
    return this.http.get(`${API_URL}getAllClasse`);
  }
}
