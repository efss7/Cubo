import { useContext } from "react";
import { useInput } from "../../hooks/useInputs";
import { ParticipationContext } from "../../global/Context";
import { ButtonDelete, ButtonUpdate, Container, Form, Inputs } from "./styles";

export const EditInputs = () => {
  const globalState = useContext(ParticipationContext);
  const [value, handleValue, clearInput] = useInput({
    first_name: "",
    last_name: "",
    participation: "",
  });

  const preventDefaultFunction = (event) => {
    event.preventDefault();
    globalState.editParticipation(value);
    globalState.showEditFn();
    clearInput();
  };

  const callTwoFunctions = () => {
    globalState.del();
    globalState.showEditFn();
  };

  return (
    <Container>
      {globalState.edit && (
        <>
          <Form onSubmit={preventDefaultFunction}>
            <Inputs
              name="first_name"
              value={value.first_name}
              onChange={handleValue}
              placeholder="Nome"
              required
            />
            <Inputs
              name="last_name"
              value={value.last_name}
              onChange={handleValue}
              placeholder="Sobrenome"
              required
            />
            <Inputs
              name="participation"
              value={value.participation}
              onChange={handleValue}
              placeholder="Participation"
              required
            />
            <ButtonUpdate>ATUALIZAR</ButtonUpdate>
          </Form>
          <ButtonDelete onClick={() => callTwoFunctions()}>
            DELETAR
          </ButtonDelete>
        </>
      )}
    </Container>
  );
};
