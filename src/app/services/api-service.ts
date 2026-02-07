import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


export interface Speciality {
  id: number;
  nombre: string;
}

export interface Medic {
  nombre: string;
  apellido: string;
  especialidad: string;
}


@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'http://localhost:5140/api';
  constructor(private http: HttpClient) {}

  getMedics(): Observable<Medic[]> {
    return this.http.get<Medic[]>(`${this.apiUrl}/medico`);
  }

  getMedicById(id: number): Observable<Medic> {
    return this.http.get<Medic>(`${this.apiUrl}/medico/${id}`);
  }

  createMedic(medic: {
    nombre: string;
    apellido: string;
    especialidadId: number;
  }): Observable<Medic> {
    return this.http.post<Medic>(`${this.apiUrl}/medico`, medic);
  }

  updateMedic(id: number, medic: { nombre: string; apellido: string; especialidadId: number }) {
    return this.http.put(`${this.apiUrl}/medico/${id}`, medic);
  }

  deleteMedic(id: number) {
    return this.http.delete(`${this.apiUrl}/medico/${id}`);
  }

  getSpecialities(): Observable<Speciality[]> {
    return this.http.get<Speciality[]>(`${this.apiUrl}/especialidad`);
  }
}
