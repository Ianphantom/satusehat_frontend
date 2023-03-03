import { Routes, Route } from "react-router-dom";

// import components
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/header/CompoundHeader";

// import Pages
import Home from "./pages/Home";

function App() {
  return (
    <div className='App'>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
