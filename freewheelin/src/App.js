import React, { useState } from "react";
import styled from "styled-components";
import { LeftSide, RightSide } from "./component";
import problem from "./assets/problem.json";
import similiar from "./assets/similiar.json";

function App() {
  const problems = problem;

  const similiars = similiar;

  const [problemData, setProblemData] = useState(problems.data);

  const [similiarData, setSimiliarData] = useState(null);

  const [selected, setSelected] = useState(null);

  const problemDelete = (id) => {
    setProblemData(problemData.filter((el) => el.id !== id));
  };

  const similiarAdd = (problemIndex, similiarIndex) => {
    setProblemData([
      ...problemData.slice(0, problemIndex + 1),
      similiarData[similiarIndex],
      ...problemData.slice(problemIndex + 1),
    ]);
  };

  const handleSimiliar = (index) => {
    setSimiliarData(similiars.data);
    setSelected(index);
  };

  return (
    <Wrap>
      <LeftSide
        problemData={problemData}
        setProblemData={setProblemData}
        problemDelete={problemDelete}
        handleSimiliar={handleSimiliar}
        seleted={selected}
      />
      <RightSide
        similiarData={similiarData}
        setSimiliarData={setSimiliarData}
        similiarAdd={similiarAdd}
        selected={selected}
      />
    </Wrap>
  );
}

export default App;

const Wrap = styled.div`
  justify-content: center;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex: 1 1 auto;
`;
