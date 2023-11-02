
type Props = {
  names: Array<string>;
  notaJoel: Array<string>;
  notaLuana: Array<string>;
}
const List: React.FC<Props> = ({ names, notaJoel, notaLuana }) => {
  return (
    <>
    <table
    id="brasileirao"
    border={1}
    >
    <thead>
        <tr>
      <td> Posição </td>
      <td > Produto </td>
      <td> Joel </td>
      <td> Luana </td>
      <td> Prioridade </td>

        </tr>
      </thead>
    { names.map((e, index) => (
      <thead key={index}>
        <tr>
      <td> {index + 1}</td>
      <td >{e}</td>
      <td> {notaJoel[index]}</td>
      <td> {notaLuana[index]}</td>
      <td> {(Number(notaLuana[index]) + Number(notaJoel[index]))/2}</td>

        </tr>
      </thead>
        ))
      }
    </table>
    </>
  );
}

export default List;