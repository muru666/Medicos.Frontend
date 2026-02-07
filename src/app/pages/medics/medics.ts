import { Component } from '@angular/core';
import { ApiService, Medic } from '../../services/api-service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-medics',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './medics.html',
  styleUrl: './medics.css',
})
export class Medics {
  medics$!: Observable<Medic[]>;
  error = '';

  constructor(private api: ApiService) {}

  ngOnInit() {
    this.medics$ = this.api.getMedics();
  }
}
