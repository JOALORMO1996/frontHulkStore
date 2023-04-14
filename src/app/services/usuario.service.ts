import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


const API_BASE ='';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http: HttpClient) { }

  listarUsuario(){

  }

  registrarUsuario(){

  }
}
