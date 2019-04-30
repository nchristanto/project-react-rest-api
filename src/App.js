import React from 'react';
import Browser from './components/Browser'
import Card from './components/Card'

class App extends React.Component {
  render() {
    return (
    <div>
      <Browser />
      <Card />
    </div>
    )
  }
}

export default App
