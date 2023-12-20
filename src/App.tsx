import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/home-page";
import GeneratePage from "./pages/generate-page";
import Navbar from "./components/navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="mt-20 h-full">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/generate" element={<GeneratePage />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
