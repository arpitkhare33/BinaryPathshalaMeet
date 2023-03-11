
import {Route, Routes} from 'react-router-dom'
import AddMeeting from './pages/AddMeeting';
import NotFound from './pages/NotFound';
import Home from './pages/Home';
import Navigation from './components/Navigation/Navigation';
import OldMeeting from './pages/OldMeetings';
function App() {
  return (
    <div className="App">
      <Navigation/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/add" element={<AddMeeting/>}/>
        <Route path="/important" element={<AddMeeting/>}/>
        <Route path="/old" element={<OldMeeting/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </div>
  );
}

export default App;
