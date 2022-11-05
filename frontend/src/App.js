import React from 'react'
import './App.css'
import Sidebar from './Sidebar'
import Chat from './Chat';
 export const App = () => {
  return (
   <div className="app">
     <div className="app__body">
     <Router>
    <Switch>

      <Sidebar/>
      <Chat></Chat>
    </Switch>
     </Router>
     </div>
   </div>
  )
}
export default App;




// 59.35 clever programmeer 