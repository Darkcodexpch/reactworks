import { Link, Outlet } from "react-router-dom"
import { useContext } from "react"
import AppContext  from "../Context/AppContext"
export default function Bookslayouts() {
    const {name} = useContext(AppContext);
  return (
    <>
    <div>
      <h1>
        <Link to="/books/1">Book one</Link>
      </h1>
      <h1>
        <Link to="/books/2">Book Two</Link>
      </h1>
      <h1>
        <Link to="/books/newbook">Add a new book</Link>
      </h1>
    </div>
    <Outlet context={{name}}/>
    </>

  )
}
