import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { TaskService } from '../../core/service/task.service';
import { ITask } from '../../core/interface/task';
import { TaskComponent } from "../../shared/components/task/task.component";
import { TaskListComponent } from "../../shared/components/task-list/task-list.component";

@Component({
  selector: 'app-service-page',
  imports: [TaskComponent, TaskListComponent],
  templateUrl: './service-page.component.html',
})
export class ServicePageComponent { 

  taskService = inject(TaskService);

  addTask(task: ITask) {
    this.taskService.addTask(task);
  }

  removeTask(id: number) {
    this.taskService.removeTask(id);
  }
}