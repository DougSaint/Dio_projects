import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

		todos: Array<Todo> = []

		todo: Todo = {
			id: 0,
			title:'',
			done:false
		}

  constructor() { }

  ngOnInit(): void {
	let items:any = localStorage.getItem('todos')

	let todos = JSON.parse(items)
	this.todos = todos
  }

  addTodo(title: string) {
	let id
	if(this.todos.length > 0){
		const i = this.todos.length -1
		id = this.todos[i].id + 1;
	}else{
		id = 0
	}
	this.todos.push({
		id: id,
		title:title,
		done:false
	});
	localStorage.setItem('todos', JSON.stringify(this.todos))
  }


  removeTodo(item:any) {
	let index =  this.todos.indexOf(item);
	this.todos.splice(index)
	localStorage.setItem('todos', JSON.stringify(this.todos))
  }
}
