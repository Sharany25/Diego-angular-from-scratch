import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { ITask } from '../../core/interface/task';

@Component({
  selector: 'app-data-binding-page',
  imports: [],
  templateUrl: './data-binding-page.component.html',
})
export class DataBindingPageComponent {

  title = 'Data Binding Page';
  text_field = signal('');
  errorMessage = signal('');
  tasks = signal <ITask[]>([]);

  //reset
  resetTask() {
    this.text_field.set('');
    this.errorMessage.set('');
  }

  //eliminar
  deleteTask(id: number) {
    this.tasks.update((tasks) => tasks.filter((task) => task.id !== id));
  }

  //crear
  addTask() {

    if (!this.text_field().trim()) {
      this.errorMessage.set('Task name is required');
      return;
    }

    const newTask: ITask = {
      id: this.tasks().length + 1,
      name: this.text_field()
    };

    this.tasks.update((tasks) => [...tasks, newTask]);
    this.resetTask();
  }

 }
