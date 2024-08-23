import React, { useEffect, useState } from "react";
import './App.css';
import { onAuthStateChanged } from "firebase/auth";
import Home from './Pages/Home'
import Feed from './Pages/Feed'
import Members from './Pages/Members'
import Developers from './Pages/Developers'
import ResourceHub from './Pages/ResourceHub'
import About from './Pages/About'
import Events from './Pages/Events'
// import FAQ from './components/FAQ'
import Protected from './Protected'
import Notes from "./components/Notes"
import Login from "./Login/Login"
import Signup from "./Signup/Signup"
import Spectrum from "./Pages/Spectrum"
import Chamber from "./Pages/CoS";
import { auth } from "./firebase";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Toaster } from 'sonner';

// import Navbar

function App() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);

  const [currentUser, setCurrentUser] = useState(null);
 onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
    } else {
      setCurrentUser(null);
    }
  });




  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" exact element={<Home name={userName} />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/feed" element={<Feed />} />
          <Route path="/members" element={<Members />} />
          <Route path="/developers" element={<Developers />} />

          <Route
          path="/resourcehub"
          element={
            //<Protected currentUser={currentUser}>
              <ResourceHub />
            //</Protected>
          }
        />
          {/* <Route path="/resourcehub" element={<ResourceHub />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          <Route path="/notes/First" element={<Notes sem='First' />} />
          <Route path="/notes/Second" element={<Notes sem='Second' />} />
          <Route path="/notes/Third" element={<Notes sem='Third' />} />
          <Route path="/notes/Fourth" element={<Notes sem='Fourth' />} />
          <Route path="/notes/Fifth" element={<Notes sem='Fifth' />} />
          <Route path="/notes/Sixth" element={<Notes sem='Sixth' />} />
          <Route path="/notes/Seventh" element={<Notes sem='Seventh' />} />
          <Route path="/notes/Eighth" element={<Notes sem='Eighth' />} />
          <Route path="/notes/:sem" component={Notes} />
          <Route path="/Spectrum" element={<Spectrum />} />
            <Route path="/CoS" element={<Chamber />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </div>
  );
}

export default App;
