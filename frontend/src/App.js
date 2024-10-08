import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Edit from "./pages/edit/Edit";

// import { getSheetsData } from "./_lib/readSheet";

function App() {
  // async function App() {
  // const data = await getSheetsData();
  // console.log("data: ", data);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="members">
              <Route index element={<List />} />
              <Route path="view/:id" element={<Single />} />
              <Route path="edit/:id" element={<Edit />} />
              <Route path="new" element={<New />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
