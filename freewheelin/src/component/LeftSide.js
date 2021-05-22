import React, { useState } from "react";
import styled from "styled-components";

function LeftSide({ problemData, problemDelete, handleSimiliar, selected }) {
  return (
    <LeftWrap>
      <div className="leftHead">
        <div>학습지 상세편집</div>
      </div>
      {problemData &&
        problemData.map((problem, index) => (
          <ProblemWrap key={problem.id}>
            <div className="problemHeadArea">
              <div className="problemType">{problem.problemType}</div>
              <div className="problemUnit">{problem.unitName}</div>
              <div className="buttonArea">
                <ActiveButton onClick={() => handleSimiliar(index)}>
                  유사문제
                </ActiveButton>
                <ActiveButton onClick={() => problemDelete(problem.id)}>
                  삭제
                </ActiveButton>
              </div>
            </div>

            <div className="problemArea">
              <span>{index + 1}</span>
              <img src={problem.problemURL} />
            </div>
          </ProblemWrap>
        ))}
    </LeftWrap>
  );
}

export default LeftSide;

const LeftWrap = styled.div`
  width: 44vw;
  height: 100vh;
  border: 1px solid;
  overflow: scroll;
`;

const ProblemWrap = styled.div`
  width: 42vw;
  height: auto;
  margin: 3px 0 3px 10px;
  border: 1px solid;
  .problemHeadArea {
    display: grid;
    grid-template-columns: 100px auto auto;
  }
  .buttonArea {
    margin-left: 10px;
    text-align: right;
  }
`;

const ActiveButton = styled.button`
  .notSelected {
    color: black;
  }
  color: blue;
  background-color: white;
  border: 1px solid black;
  margin-right: 10px;
`;
