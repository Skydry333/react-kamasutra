import React from "react";
import "./App.css";
import "./index.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App() {
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="app-wrapper">
          <Header />
          <Navbar />
          <div className="app-wrapper-content">
            <Routes>
              <Route path="/profile" element={<Profile />}></Route>
              <Route path="/dialogs" element={<Dialogs />}></Route>
              <Route path="/dialogs/1" element={<Dialogs />}></Route>
              <Route path="/dialogs/2" element={<Dialogs />}></Route>
              <Route path="/dialogs/3" element={<Dialogs />}></Route>
              <Route path="/dialogs/4" element={<Dialogs />}></Route>
              <Route path="/dialogs/5" element={<Dialogs />}></Route>
            


              <Route path="/news" element={<News />}></Route>
              <Route path="/music" element={<Music />}></Route>
              <Route path="/settings" element={<Settings />}></Route>
              {/* <Route path="*" element={<Profile />}></Route> */}
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
