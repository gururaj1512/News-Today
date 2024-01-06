import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'


function App(props) {

  const pageSize = 18;
  const apiKey= process.env.REACT_APP_NEWS_API
  const [progress, setProgress] = useState(0)
  const [mode, setMode] = useState('light')
  

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
    } else {
      setMode('light')
    }
  }

    return (
        <div className={`bg-${props.mode}`}>
      <Router>
          <Navbar mode={mode} toggleMode={toggleMode}/>
          <LoadingBar color='red' progress={progress} />
          <Routes>

            <Route exact path="/" element={<News mode={mode} setProgress= {setProgress} apiKey={apiKey} pageSize={pageSize} country="us" category="" />} />
            <Route exact path="/business" element={<News mode={mode} setProgress= {setProgress}  apiKey={apiKey} pageSize={pageSize} country="us" category="business" />} />
            <Route exact path="/entertainment" element={<News mode={mode} setProgress= {setProgress}  apiKey={apiKey} pageSize={pageSize} country="us" category="entertainment" />} />
            <Route exact path="/general" element={<News mode={mode} setProgress= {setProgress}  apiKey={apiKey} pageSize={pageSize} country="us" category="general" />} />
            <Route exact path="/health" element={<News mode={mode} setProgress= {setProgress}  apiKey={apiKey} pageSize={pageSize} country="us" category="health" />} />
            <Route exact path="/science" element={<News mode={mode} setProgress= {setProgress}  apiKey={apiKey} pageSize={pageSize} country="us" category="science" />} />
            <Route exact path="/sports" element={<News mode={mode} setProgress= {setProgress}  apiKey={apiKey} pageSize={pageSize} country="us" category="sports" />} />
            <Route exact path="/technology" element={<News mode={mode} setProgress= {setProgress}  apiKey={apiKey} pageSize={pageSize} country="us" category="technology" />} />

          </Routes>
      </Router>
        </div>
    )
  
}

export default App;
