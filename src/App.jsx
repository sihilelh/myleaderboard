import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./View/Home";
import { Toaster } from "react-hot-toast";
import Board from "./View/Board";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/board/:slug" element={<Board />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
}
