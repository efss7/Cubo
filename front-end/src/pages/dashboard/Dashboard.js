import { EditInputs } from "../../components/editInput/EditInput";
import Inputs from "../../components/inputs/Input";
import { PieChart } from "../../components/pieChart/PieChart";
import Table from "../../components/table/Table";
import * as s from "./style";

export function Dashboard() {
  return (
    <>
      <s.BlueBox>
        <Inputs />
      </s.BlueBox>
      <s.Container>
        <Table />
        <PieChart />
      </s.Container>
      <s.ContainerEdit>
        <EditInputs />
      </s.ContainerEdit>
    </>
  );
}
