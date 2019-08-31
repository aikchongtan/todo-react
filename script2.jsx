console.log('working!!!');
class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            task: "",
            event: ""
        }
    }
  
    changeHandler() {
        this.state.task = event.target.value;
        this.state.event = event;
        this.setState(this.state)
        console.log("Form-add new task", this.state.task);
    }

    inputTask() {
        console.log("Form-call addTask", this.state.task);
        this.props.addTask(this.state.task)
        this.state.event.target.value = "";
    }

    render() {
        return (
            <div>
                <input type="text" onChange={(event) => { this.changeHandler(event); }} />
                <button onClick={() => { this.inputTask() }}>Add Task</button><br />
                <hr />
            </div>
        );
    }
}
class ItemList extends React.Component {
    constructor() {
        super();
    }
    render() {
        let todoList = this.props.todoList.map((task, rowIndex) => {
            return  <tr border="1"><td width="400px">{task}</td><td width="100px"><button onClick={() => { this.props.deleteTask(task, rowIndex) }}>Delete Task</button></td></tr>   
        })

        return (
            <div>
                <h2>To do Item List</h2>
                <table>
                    <tbody>
                        {todoList}
                    </tbody>
                </table>
                <hr />
            </div>
        );
    }
}

class DeletedItemList extends React.Component {
    constructor() {
        super();

    }
    render() {
        let deletedList = this.props.deletedList.map((task, rowIndex) => {
            return <li>{task}</li>    
        })

        return (
            <div>
                <h2>Deleted Item List</h2>
                <ul>{deletedList}</ul>
                <hr />
            </div>
        );
    }
}

class TodoApp extends React.Component {
    constructor() {
        super();
        this.state = {
            todoList: [],
            deletedList: []
        };
      
        this.addTask = this.addTask.bind(this);
        this.deleteTask = this.deleteTask.bind(this);
    }
    addTask(task) {
        console.log('Add Task', task)
        this.state.todoList.push(task);
        this.setState(this.state);
        console.log('Added Task', this.state.todoList)
    }
    deleteTask(task, index) {
        console.log('Delete Task', task)
        this.state.deletedList.push(task);
        this.state.todoList.splice(index,1);
        this.setState(this.state);
    }
    render() {
        
        return (
            <div>
                <Form task={this.task} addTask={this.addTask} />
                <ItemList todoList={this.state.todoList} deleteTask={this.deleteTask} />
                <DeletedItemList deletedList={this.state.deletedList} />
            </div>
        );
    }
}

console.log("calling react dom render");
ReactDOM.render(
    <div>
        <TodoApp />
    </div>,
    document.getElementById('root')
);
