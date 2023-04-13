import { BrowserRouter, Routes, Route } from "react-router-dom";

const Routes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routes;
