import Form from "../components/form"
import { useState } from "react"
import List from "../components/list"

function Home() {
  const [stateName, setState] = useState<string[]>([])
  const [stateNotaJoel, setStateNotaJoel] = useState<string[]>([])
  const [stateNotaLuana, setStateNotaLuana] = useState<string[]>([])

  return (
<>
  <Form
    listName={setState}
    arrayName={ stateName }
    listNotaJoel={ setStateNotaJoel}
    arrayNotaJoel={stateNotaJoel}
    listNotaLuana={setStateNotaLuana}
    arrayNotaLuana={stateNotaLuana}
  />
  <List
    names={stateName}
    notaJoel={stateNotaJoel}
    notaLuana={stateNotaLuana}
  />
</>
  )
}

export default Home;
