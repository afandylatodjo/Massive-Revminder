import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

export default function App() {
  return (
    <main className='w-full mx-auto max-w-screen-2xl'>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </main>
  );
}