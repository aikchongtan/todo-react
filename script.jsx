class List extends React.Component {
  constructor(){
    super()

    this.state = {
      word:"",
      errormsg: "",
      list : []
    }
  }

  Task(input_word, input_date){
    /*let newTask = [{
      word: input_word,
      date: input_date
    }];
    console.log("one task" + newTask[0].word)*/
    let newTask = [input_word,input_date];
    return newTask;
  }

  addItem(){
    console.log("word length " + this.state.word.length)
    if (this.state.word.length <2 || this.state.word.length > 200)
    {
      this.setState({errormsg:"Invalid Input length. (must be 1<x<200)"});
    } else {
      this.setState({errormsg:""});
      //this.state.list.push([this.state.word,Date()]);
      let newTask = this.Task(this.state.word, Date());
      this.state.list.push(newTask);
      this.setState({word:""});
      console.log("List " +this.state.list)
    }
  }
  

  changeHandler(event){
    this.setState({word:event.target.value});
    console.log("change", this.state.word);
  }
  render() {
      // render the list with a map() here
      return (
        <div className="list">
          <p className="danger-text">{this.state.errormsg}</p>
          <input onChange={(event)=>{this.changeHandler(event);}}/>
          <button onClick={()=>{this.addItem()}}>add item</button>
        </div>
      );
  }
}

ReactDOM.render(
    <List/>,
    document.getElementById('root')
);

