import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Images, Audios, Videos } from "./components/ImagesList";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Layout Images={Images} title="Image" />} />
        <Route
          path="/audio"
          element={<Layout Images={Audios} title="Audio" />}
        />
        <Route path="/video" element={<Layout Images={Videos} title="Video"/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
