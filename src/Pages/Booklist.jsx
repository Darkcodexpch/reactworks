import { useOutletContext } from "react-router-dom";
export default function Booklist() {
    const {name} = useOutletContext();
  return (
    <>
    <h1>Book list</h1>
    <p> its come from context {name}</p>
    </>
  );
}
