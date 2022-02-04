import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.scss';
import { Header } from "./components/Header";
import { Footer } from './components/Footer';
import { Home } from "./pages/Home/Home";
import { Authorization } from "./components/Authorization";
import { UserMenu } from "./components/UserMenu";
import { CreateMenu } from "./components/CreateMenu";
import { Contact } from "./components/Contact";

// HOC
const Layout = ({ children, withFooter = true }) => {
  return <>
    <Header />
    {children}
    {withFooter ? <Footer /> : null}
  </>

}
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/auth/:type" element={<Layout withFooter={false}><Authorization /></Layout>} />
          <Route path="/menu" element={<Layout withFooter={false}><UserMenu /></Layout>} />
          <Route path="/create-menu" element={<Layout withFooter={false}><CreateMenu /></Layout>} />
          <Route path="/contact" element={<Layout withFooter={false}><Contact /></Layout>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
