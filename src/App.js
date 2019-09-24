import React, {Component  } from 'react';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      currentItemValue: ''
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.addItems = this.addItems.bind(this);
    // this.onDeleteItem = this.onDeleteItem.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      currentItemValue: event.target.value
    })
  }

  addItems() {
    let joined = this.state.items.concat(this.state.currentItemValue);
    this.setState({ items: joined });
    document.getElementById('crudItem').value = '';
  }

  onDeleteItem(index) {
    let arrayItems = [...this.state.items]; // make a separate copy of the array
    if (index !== -1) {
      arrayItems.splice(index, 1);
      this.setState({items: arrayItems});
    }
  }
  
  render(){
    console.log('rendering state', this.state);
     return(
        <div className="App">
          <div className="row">
            <div className="col-lg-3">
              <input type="text" class="form-control" id='crudItem' onChange={this.handleInputChange} />
            </div>
            <div className="col-lg-3">
              <button className="btn btn-primary btn-sm" onClick={this.addItems}>+ Add</button>
            </div>
          </div>
          <div className="row" style={{ margin: "5px 0" }}>
            <div className="col-lg-8">
            <table class="table">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">S.No</th>
                  <th scope="col">To-do</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              {this.state.items.length === 0 ? 
                <div class="alert alert-warning">
                  <strong>Info!</strong> No Data Availale
                </div>
                :
                <tbody>
                {
                  this.state.items.map((item, index) => (
                    <tr>
                      <th scope="row">{index + 1}</th>
                      <td>{item}</td>
                      <td>
                        <button className="btn btn-info" onClick={() => this.onDeleteItem(index)}>Delete</button>
                      </td>
                    </tr>
                  ))
                }
              </tbody>
              }
            </table>
            </div>
          </div>
        </div>
     );
  }
}
    
export default App;


