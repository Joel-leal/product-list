import Form from "../components/form"
import { useState } from "react"
import List from "../components/list"

function Home() {
  const [stateName, setState] = useState<string[]>([])
  const [firstNote, setFirstNote] = useState<string[]>([])
  const [secondNote, setSecondNote] = useState<string[]>([])

  return (
<>
  <Form
    listName={setState}
    arrayName={ stateName }
    addFirstNote={ setFirstNote}
    listFirstNote={firstNote}
    addSecondNote={setSecondNote}
    listSecondNote={secondNote}
  />
  <List
    names={stateName}
    firstNote={firstNote}
    secondNote={secondNote}
  />
</>
  )
}

export default Home;
