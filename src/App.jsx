import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import YourPage1 from "./Pages/Yourpage1";
import YourPage2 from "./Pages/Yourpage2";
import BooksRoutes from "./RoutesLayouts/BooksRoutes";
import Bookslayouts from "./RoutesLayouts/Bookslayouts";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route />
        <Route
          path="/"
          element={
            <h1 style={{ textAlign: "center" }}>
              Basic Boiler Plate with react router v6 and context Api
            </h1>
          }
        />
        <Route path="/page1" element={<YourPage1 />} />
        <Route path="/page2" element={<YourPage2 />} />
         {/* nested routing */}

         {/* Method One */}

        {/* <Route path="/books" element={<Bookslayouts/>}>
          <Route index element={<Booklist />} />
          <Route path=":id" element={<Books />} />
          <Route path="newbook" element={<Newbook />} />
        </Route> */}

        {/* Method two create a seprate page for children routes then define here */}
        <Route path="/books/*" element={<BooksRoutes/>}/>
      </Routes>
    </>
  );
}

export default App;
