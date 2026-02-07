import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { About } from './pages/about/about';
import { Medics } from './pages/medics/medics';
import { Contact } from './pages/contact/contact';
import { Speciality } from './pages/speciality/speciality';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'nosotros', component: About },
  { path: 'medicos', component: Medics },
  { path: 'especialidades', component: Speciality },
  { path: 'contacto', component: Contact },
  { path: '**', redirectTo: '' },
];
