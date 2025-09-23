import { Component, signal, effect } from '@angular/core';
import { ITask } from '../../core/interfaces';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-data-binding-page',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './data-binding-page.component.html',
})
export class DataBindingPageComponent { 

  title = 'Data Binding Page';
  text_field = signal('');
  messageError = signal('');
  tasks = signal<ITask[]>([]);
  editingTask = signal<ITask | null>(null);

  constructor() {

    const savedTasks = localStorage.getItem('tasks');
    if (savedTasks) {
      this.tasks.set(JSON.parse(savedTasks));
    }


    effect(() => {
      localStorage.setItem('tasks', JSON.stringify(this.tasks()));
    });
  }

  resetTasks() {
    this.tasks.set([]);
  }

  deleteTask(id: number) {
    this.tasks.update(tasks => tasks.filter(task => task.id !== id));
  }

  startEditTask(task: ITask) {
    this.editingTask.set(task);
    this.text_field.set(task.name);
  }
  
  cancelEdit() {
    this.editingTask.set(null);
    this.text_field.set('');
  }

  addTask() {
    this.messageError.set(''); 

    const text = this.text_field().trim();
    if (text.length === 0) {
      this.messageError.set('The field is required');
      return;
    }

    const currentEditingTask = this.editingTask();
    if (currentEditingTask) {

      
      this.tasks.update(tasks => 
        tasks.map(task => 
          task.id === currentEditingTask.id ? { ...task, name: text } : task
        )
      );
      this.cancelEdit();
    } else {

      const newTask: ITask = {
        id: this.tasks().length > 0 ? Math.max(...this.tasks().map(t => t.id)) + 1 : 1,
        name: text
      };
      this.tasks.update(tasks => [...tasks, newTask]);
      this.text_field.set('');
    }
  }
}
