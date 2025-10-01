import Landing from "./components/Landing.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Membership from "./components/Membership.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Waitlist from "./components/Waitlist.jsx";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} /> {/* Home page route */}
        <Route path="/membership" element={<Membership />} />
        <Route path="/waitlist" element={<Waitlist />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
