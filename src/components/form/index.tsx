import { useState } from "react"

type Props = {
  listName: (a: string[]) => void;
  addFirstNote: (a: string[]) => void;
  addSecondNote: (a: string[]) => void;
  arrayName: Array<string>;
  listFirstNote: Array<string>;
  listSecondNote: Array<string>;
}
const Form: React.FC<Props> = ({ listName, addFirstNote, addSecondNote, listFirstNote, listSecondNote, arrayName }) => {
const [nameList, setNameList] = useState('')
const [firstNote, setFirstNote] = useState('')
const [secondNote, setSecondNote] = useState('')

const handleSubmit = (event: React.FormEvent) => {
  event.preventDefault();
  listName([...arrayName, nameList])
  addFirstNote([...listFirstNote, firstNote])
  addSecondNote([...listSecondNote, secondNote])
  setNameList('')
  setFirstNote('')
  setSecondNote('')
};
  return (
    <>
    <div>
      <form>
        <label htmlFor="campo">
          Produto
        <input
          type="text"
          id="campo"
          name="campo"
          value={nameList}
          placeholder="Insira o elemento aqui"
          onChange={ (e) => setNameList(e.target.value)}
        />
        </label>
        <label htmlFor="nota-j">
          Nota-1
        <input
          type="number"
          id="nota-j"
          name="nota"
          value={firstNote}
          placeholder="Insira sua nota aqui"
          onChange={ (e) => setFirstNote(e.target.value)}
        />
        </label>
        <label htmlFor="nota-l">
        Nota-2
        <input
          type="number"
          id="nota-l"
          name="nota"
          value={secondNote}
          placeholder="Insira sua nota aqui"
          onChange={ (e) => setSecondNote(e.target.value)}
        />
        </label>
        <button
        type="submit"
        onClick={handleSubmit}>Enviar</button>
      </form>
    </div>
    </>
  )
}

export default Form
