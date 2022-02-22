import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.scss';
import { Header } from "./components/Header";
import { Footer } from './components/Footer';
import { Home } from "./pages/Home/Home";
import { Authorization } from "./components/Authorization";
import { UserMenu } from "./components/UserMenu";
import { CreateMenu } from "./components/CreateMenu";
import { Contact } from "./components/Contact";
import { Directory } from "./components/Directory";
import { CreateDish } from "./components/CreateDish";
import { SportMenu } from "./assets/menuVariants/SportMenu";
import { ChildrenMenu } from "./assets/menuVariants/ChildrenMenu";


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
          <Route path="/directory" element={<Layout withFooter={false}><Directory /></Layout>} />
          <Route path="/create-dish" element={<Layout withFooter={false}><CreateDish /></Layout>} />
          <Route path="/sport-menu" element={<Layout withFooter={false}><SportMenu /></Layout>} />
          <Route path="/children-menu" element={<Layout withFooter={false}><ChildrenMenu /></Layout>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
