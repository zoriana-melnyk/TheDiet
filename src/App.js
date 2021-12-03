import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./components/Header";
import { Footer } from './components/Footer';
import { Home } from "./pages/Home/Home";
// import { Authorization } from './components/Authorization';


import './App.scss';

// HOC
const Layout = ({ children }) => {
  return <>
    <Header />
    {children}
    <Footer />
  </>

}
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          {/* <Route path></Route> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
