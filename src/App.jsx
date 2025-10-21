import Landing from "./components/Landing.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Membership from "./components/Membership.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
import Waitlist from "./components/Waitlist.jsx";
import Thankyou from "./components/Thankyou.jsx";
import Waitlist2 from "./components/Waitlist2.jsx";
import Faqs from "./components/Faqs.jsx";
import BookCourt from "./components/BookCourt.jsx";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Landing />} /> {/* Home page route */}
        <Route path="/membership" element={<Membership />} />
        <Route path="/waitlist" element={<Waitlist />} />
        <Route path="/waitlist2" element={<Waitlist2 />} />
        <Route path="/contact" element={<Thankyou />} />
        <Route path="/faq" element={<Faqs />} />
        <Route path="/book" element={<BookCourt />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
