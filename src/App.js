import { PageProvider } from "./PageProvider";
import About from "./pages/About";
import Contact from "./pages/Contact";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Portfolio from "./pages/Portfolio";

import Home from "./pages/Home";
import Resume from "./pages/Resume";


export default function App() {


  return (
    <PageProvider>
      <div className="main">
        <Header />
        <div className="row">
          <div className="col"></div>
          <div className="col-8">
            <Home />
            <Portfolio />
            <About />
            <Contact />
            <Resume />
          </div>
          <div className="col"></div>
        </div>
        <Footer />
      </div>
    </PageProvider >
  );
}

