import React, { Component } from 'react'
import EnhancedTable from './EnhancedTable'

export default class ProjectTable extends Component {
  state = {
    rows: []
  }
  
  API_URL = "http://localhost:3001/projects"; 

  async componentDidMount() {
    
    fetch(this.API_URL)
      .then(r => r.json())
      .then(data => this.CleanData(data))
  }

  CleanData = data => {
    this.setState(
      {
        rows: data
      },
      () => console.log(this.state.rows)
    )
  }
  
  render() {
    return (
      <div>
        <EnhancedTable rows={this.state.rows}>
          
        </EnhancedTable>
      </div>
    )
  }
}

