import { useContext } from "react";
import { ParticipationContext } from "../../GlobalState/context";
import {
  Aligned,
  Celula,
  CelulaTd,
  Container,
  Id,
  Participation,
  Table1,
} from "./style";
import { Message } from "../Message/Message";

const Table = () => {
  const globalState = useContext(ParticipationContext);

  const twoFunctionsCall = (first_name, last_name) => {
    globalState.editTableDataFn(first_name, last_name);
    globalState.showEditFn();
  };

  return (
    <Container>
      <Message />
      <Table1>
        <thead>
          <tr>
            <Id>&nbsp;</Id>
            <Aligned>First Name</Aligned>
            <Aligned>Last Name</Aligned>
            <Participation>Participation</Participation>
          </tr>
        </thead>
        <tbody>
          {globalState.list &&
            globalState.list.map((people) => {
              return (
                <tr
                  key={people.id}
                  onDoubleClick={() =>
                    twoFunctionsCall(people.first_name, people.last_name)
                  }
                >
                  <Celula>{people.id}</Celula>
                  <CelulaTd>{people.first_name}</CelulaTd>
                  <CelulaTd>{people.last_name}</CelulaTd>
                  <Celula>{people.participation}%</Celula>
                </tr>
              );
            })}
        </tbody>
      </Table1>
      <p>
        Para editar ou deletar uma cota de participação, dê 2 clicks no nome da
        pessoa
      </p>
    </Container>
  );
};

export default Table;
