import Chart from "react-google-charts";
import { useContext } from "react";
import { ParticipationContext } from "../../global/Context";
import { Data } from "../data/Data";
import { Container, ContainerLoader } from "./style";
import { Loader } from "../../components/loader/Loader";

export const PieChart = () => {
  const globalState = useContext(ParticipationContext);

  const arrayData = globalState.list.map((people) => {
    return [`${people.first_name}`, people.participation];
  });

  const data = [["Pessoa", "Participação"], ["Outros", 100], ...arrayData];

  const checkFullChart = () => {
    const totalParticipation = arrayData.reduce((acc, curr) => {
      acc += curr[1];
      return acc;
    }, 0);
    if (totalParticipation < 100) {
      data[1][1] = 100 - totalParticipation;
    }
    if (totalParticipation === 0 || totalParticipation >= 100) {
      data.splice(1, 1);
    }
  };

  checkFullChart();

  const options = {
    title: "Participação de cada pessoa",
    pieHole: 0.4,
    is3D: false,
  };
  return (
    <Container>
      <Data />
      {globalState.loader ? (
        <ContainerLoader>
          <Loader />
        </ContainerLoader>
      ) : (
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"600px"}
          height={"400px"}
        />
      )}
    </Container>
  );
};
