const fs = require('fs')

class Todo {
    constructor(id, task, status){
        this.id = id;
        this.task = task;
        this.status = status || false;
    }
    static getTodos(){
        let data = fs.readFileSync('./data.json', 'utf8');
        let parsedData = JSON.parse(data);
        let todos = parsedData.map(el => {
            const { id, task, status} = el;
            return new Todo(id, task, status);
        })
        return todos;
    }
    static show(){
        let todos = this.getTodos();
        return todos;
    }

    static add(todo){
        let todos = this.getTodos();
        let id = todos[todos.length-1].id + 1;
        let task = todo[0];
        let temp = new Todo(id, task);
        todos.push(temp)
        // console.log(todos);
        this.save(todos);
    }

    static delete(todo){
        let todos = this.getTodos();
        let id = Number(todo[0]);
        todos = todos.filter(todo => todo.id !== id);
        this.save(todos);
    }

    static update(todo) {
        let todos = this.getTodos();
        let id = Number(todo[0]);
        let task = todo[1];
        todos = todos.map(todo => {
            if(todo.id === id) {
                todo.task = task;
            }
            return todo;
        })
        // console.log(todos)
        this.save(todos);
    }

    static save(data){
        //stringfy merubah data menjadi string
        // 3 itu jumlah space di json
        fs.writeFileSync('./data.json', JSON.stringify(data, null, 3));
    }
}

module.exports = Todo;