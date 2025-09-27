import {Component, signal} from '@angular/core';

@Component({
  selector: 'app-structural-directives-page',
  imports: [],
  templateUrl: './structural-directives-page.component.html',
})
export class StructuralDirectivesPageComponent { 

  // Condicional IF
  isVisible = signal(true);
  
  toggleVisibility() {
    this.isVisible.update(v => !v);
  }

  // Condicional SWITCH
  viewMode = signal<'none' | 'list' | 'grid'>('none');

  setViewMode(mode: 'none' | 'list' | 'grid') {
    this.viewMode.set(mode);
  }

  //Ciclo FOR
  users = signal([
    {id:1 , name: 'Alice', role: 'Admin'},
    {id:2 , name: 'Bob', role: 'User'},
    {id:3 , name: 'Charlie', role: 'user'},
  ])
}