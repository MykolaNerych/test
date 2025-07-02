// App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SWRConfig } from "swr";
import { Home } from "@/pages/home";
import { FilmPage } from "@/pages/film";

const App = () => {
  return (
    <SWRConfig>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/film/:id" element={<FilmPage />} />
        </Routes>
      </BrowserRouter>
    </SWRConfig>
  );
};

export default App;
