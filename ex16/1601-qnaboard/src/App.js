import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import QuestionBoard from "./components/QuestionBoard";
import QuestionDetail from "./components/QuestionDetail";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      <div className="navbar bg-neutral text-neutral-content">
        <button className="btn btn-ghost text-xl">daisyUI</button>
      </div>
      <Routes>
        <Route path="/" element={<QuestionBoard />} />
        <Route path="/detail/:questionId" element={<QuestionDetail />} />
        <Route
          path="*"
          element={
            <div>
              <h2>이 페이지는 존재하지 않습니다:</h2>
              <p>{location.pathname}</p>
            </div>
          }
        />
      </Routes>
    </>
  );
}

export default App;
