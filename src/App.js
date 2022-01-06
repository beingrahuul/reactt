import './App.css';
import { useState } from 'react';
import Title from './components/Titles';
import Modal from './components/Modal';
import EventList from './components/EventList';

function App() {

  const [showModal , setshowModal ] = useState(false);
  const [showEvents, setshowEvents] = useState(true);

  const [events, setEvents] = useState([
    {title: 'rahul', id: 1},
    {title: 'beingrahuul', id: 2}
  ])


  const handleClick = function(id){
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      })
    })
    console.log(id);
  }

  const handleClose = function(id){
    setshowModal(false);
  }

  const subtilte = "Everything you need to know";
   
  return (
        <div className="App">

        <Title title="Events in your area" subtile={subtilte}/>

        {showEvents && (
            <div>
            <button onClick={() => setshowEvents(false)}>Hide Events</button>
            </div>
        )}

        {!showEvents && (
            <div>
            <button onClick={() => setshowEvents(true)}>Show Events</button>
            </div>
        )}

        {showEvents && <EventList events={events} handleClick={handleClick}/>}
      
        {showModal && <Modal handleClose={handleClose}>
            <h2>10% Off Coupon Code!!</h2>
            <p>Use the code NINJA10 at the checkout.</p>
        </Modal>}
        
        <div>
            <button onClick={() => setshowModal(true)}>Show Modal</button>
        </div>
    
    </div> 
  );
}

export default App;
