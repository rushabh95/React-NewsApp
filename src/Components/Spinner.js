import React, { Component } from 'react'
import loading from './Fidget-spinner.gif'

export class Spinner extends Component {
  render() {
    return (
      <div className="text-center my-3">
        <img src = {loading} alt ={loading}></img>
      </div>
    )
  }
}

export default Spinner
