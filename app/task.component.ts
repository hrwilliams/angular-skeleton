import { Component, Input } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-display',
  template: `
  <div>
    <input *ngIf="task.done === true" type="checkbox" checked (click)="toggleDone(false)"/>
    <input *ngIf="task.done === false" type="checkbox" (click)="toggleDone(true)"/>
    <label>{{ task.description }} --- Priority: {{ task.priority }} --- Category: {{ task.category }}</label>
  </div>
  `
})
export class TaskComponent {
  @Input() task: Task;
  toggleDone(setCompleteness: boolean) {
    this.task.done = setCompleteness;
  }
  togglePriority(setPriority: string) {
    this.task.priority = setPriority;
  }
  toggleCategory(setCategory: string) {
    this.task.category = setCategory;
  }
}
