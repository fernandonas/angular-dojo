import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ToDos } from '../tasks/tasks.component';

@Component({
  selector: 'app-itens',
  templateUrl: './itens.component.html',
  styleUrls: ['./itens.component.less']
})
export class ItensComponent implements OnInit {
  @Input() todo: ToDos = {
    name: '',
    done: false
  }

  @Output() deletar = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

}
