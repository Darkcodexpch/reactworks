import { useContext, useEffect } from "react";
import AppContext from "../Context/AppContext";
const Yourpage1 = () => {
  const { name } = useContext(AppContext);
  useEffect(()=>{
  console.log(name);
  console.log('running one time')
  },[])
  return (
    <div>
      <h1>Page one</h1>
    </div>
  );
};

export default Yourpage1;
