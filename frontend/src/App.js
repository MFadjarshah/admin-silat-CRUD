import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List1 from "./pages/list/List1";
import List2 from "./pages/list/List2";
import List3 from "./pages/list/List3";
import List4 from "./pages/list/List4";
import List19 from "./pages/list/List19";
import ListX from "./pages/list/ListX";
// import Single from "./pages/single/Single";
import Single1 from "./pages/single/Single1";
import New from "./pages/new/New";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Edit from "./pages/edit/Edit";

import React from "react";

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
            <Route path="members/">
              {/* <Route index element={<List />} /> */}
              <Route path="1kad" element={<List1 />} />
              <Route path="2kad" element={<List2 />} />
              <Route path="3kad" element={<List3 />} />
              <Route path="4kad" element={<List4 />} />
              <Route path="19ramd" element={<List19 />} />
              {/* <Route path="view/1kad/:id" element={<Single />} /> */}
              <Route path="members/" element={<ListX />} />
              <Route path="single/:id" element={<Single1 />} />
              {/* dynamic route */}
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
