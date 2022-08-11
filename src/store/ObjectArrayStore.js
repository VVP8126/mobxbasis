import { makeAutoObservable } from 'mobx';

class ObjectArray {
    
    todos = [
      {id:1, title:"Post 1", body:"Some text some text some text some text some text some text"}
    ];
    
    constructor() {
        makeAutoObservable(this); // In this place the state of class becomes observable
    }
    
    add(todo) {
        let ln = this.todos.length;
        if (ln > 0) {
            todo.id = this.todos[ln - 1].id + 1;
        } else {
            todo.id = 1;
        }
        this.todos[ln] = todo;
    }
    del(x) {
        this.todos = this.todos.filter(t => x !== t.id);
    }
}

export default new ObjectArray();
