import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Search from './pages/search'
import Saved from './pages/save'
import NoMatch from './pages/nomatch'
import Navbar from './components/Navbar'
import Alert from './components/Alert'
import openSocket from 'socket.io-client'
const socket = openSocket('http://localhost:3001')

function App() {
  socket.on('bookSaved', data => {
    console.log('A book has been saved', data)
    alert(data.message)
  })
  return (
    <div className='mx-auto'>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={Search} />
          <Route exact path='/saved' component={Saved} />
          <Route exact path='*' component={NoMatch} />
        </Switch>
        {/* <Alert alertMessage='book saved' bookSavedAlert={bookSavedAlert}/> */}
      </Router>
    </div>
  )
}

export default App
