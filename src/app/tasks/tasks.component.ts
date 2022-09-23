import { Component, OnInit } from '@angular/core';


export interface ToDos {
  name: string;
  done: boolean;
}

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.less']
})
export class TasksComponent implements OnInit {
  todos: ToDos[] = [{
    done: false,
    name: 'Fazer'
  }];

  name: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  addTask(): void {
    if (!this.name) {
      alert("Ixi acho que faltou descrever a tarefa!!")
      return
    }
    this.todos.push({ done: false, name: this.name });
    this.name = '';
  }

  remove(itemToDelete: ToDos): void {
    this.todos = this.todos.filter(item => item !== itemToDelete);
  }

}
