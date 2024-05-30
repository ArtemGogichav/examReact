import Form from "./Form/Form";
import { useState } from "react";
import ListFilms from "./ListFilms/ListFilms";

function App() {
  const [state, setState] = useState([])
  return (
    <>
      <Form setState={setState}></Form>
      <ListFilms state={state}></ListFilms>
    </>
  )
}

export default App;
