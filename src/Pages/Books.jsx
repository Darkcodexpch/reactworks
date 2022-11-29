import {useParams } from "react-router-dom"

export default function Books() {
const {id} = useParams();
  return (
    <div>
        <h1>Book {id}</h1>
    </div>
  )
}
