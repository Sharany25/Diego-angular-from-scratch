import { ChangeDetectionStrategy, Component, output, signal } from '@angular/core';
import { ITask } from '../../../core/interface/task';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
})
export class TaskComponent { 
  text_field = signal('');
  errorMessage = signal('');
  outputTask = output<ITask>();
  
  //reset
  resetTask() {
    this.text_field.set('');
    this.errorMessage.set('');
  }

  //crear
    addTask() {
  
      if (!this.text_field().trim()) {
        this.errorMessage.set('Task name is required');
        return;
      }
  
      const newTask: ITask = {
        id: Math.floor(Math.random() * 10000),
        name: this.text_field()
      };
  
      this.outputTask.emit(newTask);
      this.resetTask();
    }
}
