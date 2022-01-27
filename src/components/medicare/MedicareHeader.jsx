import React, { Component } from 'react'

class MedicareHeader extends Component {
  render() {

    const city = localStorage.getItem('city')
    return (
      <div className="bg-blue-500 headerText justify-center align-middle text-center">
        <h2>Medicare Savings Up to $500 in {city}</h2>
  </div>
    )
  }
}
export default MedicareHeader