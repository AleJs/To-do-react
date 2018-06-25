import React, {Component} from 'react';

class Todoform extends Component{
  constructor(){
    super();
    this.state = {
      title: '',
      responsible:'',
      description:'',
      priority:'low',
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleInput(e){
    const {value, name} = e.target;
    this.setState({
      [name]: value
    })
    console.log(this.state);
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.onApptodo(this.state);
    console.log("enviando...");
  }
  render(){
    return(

      <div className="card">
        <form onSubmit={this.handleSubmit} className="card-body">
          <div className="form-group">
            <input
              type="text"
              name="title"
              className="form-control"
              placeholder="title"
              onChange={this.handleInput}


          />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="responsible"
              className="form-control"
              placeholder="responsible"
              onChange={this.handleInput}


          />
          </div>
          <div className="form-group">
            <input
              type="text"
              name="description"
              className="form-control"
                placeholder="description"

              onChange={this.handleInput}


          />
          </div>
          <div className="form-group">
            <select

              name="priority"
              className="form-control"
              value={this.state.priority}
              onChange={this.handleInput}
              placeholder="title"
            >
          <option> low</option>
          <option> mediun</option>
          <option> hard</option>
        </select>
          </div>
          <button type="submit" className="btn btn-primary ">
            save
          </button>
        </form>
      </div>


    )
  }
}
export default Todoform;
