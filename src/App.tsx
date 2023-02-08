import { Routes, Route } from 'react-router-dom';
import { Footer, Navbar } from './components';
import { Contact, Home, NotFound } from './pages';

function App() {
  return (
    <div className=" overflow-hidden">
      <Navbar />
      <div className="min-h-screen w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
