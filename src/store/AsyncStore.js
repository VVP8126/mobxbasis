import { makeAutoObservable } from 'mobx';

class AsyncStore {
    todos = [
      { id:0,
        title:"Default post 1",
        body:"Click DOWNLOAD to get 6 more post from jsonplaceholder site"}
    ];
    
    constructor() {
        makeAutoObservable(this); // In this place the state of class becomes observable
    }
    
    load() {
        console.log("MobX doesn't require special libraries to work with async functions !");
        fetch('http://jsonplaceholder.typicode.com/posts?_limit=6')
            .then(response => response.json())
            .then(json => this.todos = [...this.todos, ...json]);
    }

    del(x) {
        this.todos = this.todos.filter(todo => x !== todo.id);
    }
}

export default new AsyncStore();
