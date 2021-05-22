import React from "react";
import styled from "styled-components";

function RightSide({ similiarData, similiarAdd, selected }) {
  return (
    <RightWrap>
      <div className="rightHead">문항교체/추가</div>
      {similiarData ? (
        similiarData &&
        similiarData.map((similiar, index) => (
          <SimiliarWrap key={similiar.id}>
            <div className="similiarHeadArea">
              <div className="similiarType">{similiar.problemType}</div>
              <div className="similiarUnit">{similiar.unitName}</div>
              <div className="buttonArea">
                <ActiveButton>추가</ActiveButton>
                <ActiveButton onClick={() => similiarAdd(selected, index)}>
                  교체
                </ActiveButton>
              </div>
            </div>
            <div className="similiarArea">
              <span>{index + 1}</span>
              <img src={similiar.problemURL} />
            </div>
          </SimiliarWrap>
        ))
      ) : (
        <div id="rightDefault">
          <div>
            <button id="defaultButton" disabled>
              유사문항
            </button>
            <span> 버튼을 누르면 </span>
            <div>
              <span>해당 문제의 유사 문항을 볼 수 있습니다.</span>
            </div>
          </div>
        </div>
      )}
    </RightWrap>
  );
}

export default RightSide;

const RightWrap = styled.div`
  width: 44vw;
  height: 100vh;
  border: 1px solid;
  overflow: scroll;

  #rightDefault {
    display: flex;
    justify-content: center;
    text-align: center;
    margin-top: 50%;
  }
  #defaultButton {
    color: blue;
    background-color: white;
    border: 1px solid black;
  }
`;

const SimiliarWrap = styled.div`
  width: 42vw;
  height: auto;
  margin: 3px 0 3px 0;
  border: 1px solid;
  .similiarHeadArea {
    display: grid;
    grid-template-columns: 100px auto auto;
  }
  .buttonArea {
    text-align: right;
  }
`;

const ActiveButton = styled.button`
  color: blue;
  background-color: white;
  border: 1px solid black;
  margin-right: 10px;
`;
