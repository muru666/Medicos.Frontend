import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService, Speciality as SpecialityType } from '../../services/api-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-speciality',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './speciality.html',
  styleUrl: './speciality.css',
})
export class Speciality {
  specialities$!: Observable<SpecialityType[]>
  error = '';

  constructor(private api: ApiService) {}

  ngOnInit(){
    this.specialities$ = this.api.getSpecialities();
  }
}
