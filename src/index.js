import React from 'react';
import ReactDOM from 'react-dom';




class App extends React.Component {
  
   state ={
    checked: false,
    count: 0
  }

  handleCheckCount=(e)=> {
    // let input = document.getElementsByTagName('input');
    const { checked, type } = e.target;
    let count= this.state.count
    // for (var i = 0; i < input.length; i++) {
      if (type === "checkbox" && checked === true) {
        this.setState(state => state.count++, this.logCount)
      } else {
        this.setState(state => state.count--, this.logCount)
      }
    // }
  }
  
  logCount() {
    console.log(this.state.count);
  }

  render(){
    return(
      <div>
        <table>
        <thead>
        <tr>
          <th className="select_all">
 
            <input type="checkbox" name="check" id="parent" onChange={e => this.handleCheckCount(e)}/>
            <input type="checkbox" name="check" id="parent" onChange={e => this.handleCheckCount(e)}/>
            <input type="checkbox" name="check" id="parent" onChange={e => this.handleCheckCount(e)}/>
            <input type="checkbox" name="check" id="parent" onChange={e => this.handleCheckCount(e)}/>
          </th>
          <th>CreditorName</th>
          <th>FirstName</th>
          <th>LastName</th>
          <th>MinPaymentPercentage</th>
          <th>Balance</th>

        </tr>
        </thead>

      </table>

        <h2>Total Number of Checkbox Selected: {this.state.count}</h2>

      </div>
    )
  }
  
}

ReactDOM.render(<App />, document.getElementById('app'));
