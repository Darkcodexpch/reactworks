import { Routes, Route } from "react-router-dom";
import Booklist from "../Pages/Booklist";
import Books from "../Pages/Books";
import Newbook from "../Pages/Newbook";
import Bookslayouts from "./Bookslayouts";
export default function BooksRoutes() {
  return (
    <Routes>
      <Route element={<Bookslayouts />}>
        <Route index element={<Booklist />} />
        <Route path=":id" element={<Books />} />
        <Route path="newbook" element={<Newbook />} />
      </Route>
    </Routes>
  );
}
