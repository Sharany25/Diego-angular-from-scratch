import { Component, signal, effect } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Alumnos } from '../../core/interfaces/alumnos';

@Component({
  selector: 'app-alumno-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './alumno-list.component.html'
})
export class AlumnoListComponent {
  alumnos = signal<Alumnos[]>(this.loadFromStorage());
  editando = signal<boolean>(false);
  idEditando = signal<number | null>(null);

  nuevoAlumno = signal<Alumnos>({
    id: 0,
    name: '',
    duration: '',
    nivel: 'basico',
    cuatrimestre: 0
  });

  constructor() {
    effect(() => {
      localStorage.setItem('alumnos', JSON.stringify(this.alumnos()));
    });
  }

  private loadFromStorage(): Alumnos[] {
    const data = localStorage.getItem('alumnos');
    return data ? JSON.parse(data) : [];
  }

  agregarAlumno() {
    const alumno = { ...this.nuevoAlumno(), id: Date.now() };
    this.alumnos.update(arr => [...arr, alumno]);
    this.resetForm();
  }

  editarAlumno(alumno: Alumnos) {
    this.nuevoAlumno.set({ ...alumno });
    this.idEditando.set(alumno.id);
    this.editando.set(true);
  }

  actualizarAlumno() {
    this.alumnos.update(arr =>
      arr.map(a => (a.id === this.idEditando() ? { ...this.nuevoAlumno() } : a))
    );
    this.resetForm();
  }

  eliminarAlumno(id: number) {
    this.alumnos.update(arr => arr.filter(a => a.id !== id));
  }

  resetForm() {
    this.nuevoAlumno.set({
      id: 0,
      name: '',
      duration: '',
      nivel: 'basico',
      cuatrimestre: 1
    });
    this.idEditando.set(null);
    this.editando.set(false);
  }
}
