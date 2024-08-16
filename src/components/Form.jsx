import React, { useState } from "react";

const Form = ({ names, setNames }) => {
  const [nation, setNation] = useState("");
  const [gold, setGold] = useState(0);
  const [silver, setSilver] = useState(0);
  const [bronze, setBronze] = useState(0);

  const addFn = (e) => {
    e.preventDefault();

    if (nation === "") {
      alert("국가를 입력해주세요.");
      return;
    }

    const isExists = names.some((name) => name.nation === nation);

    if (isExists) {
      alert("이미 존재하는 국가입니다.");
      return;
    }

    const newName = {
      id: new Date().getTime(),
      nation: nation,
      gold: Number(gold),
      silver: Number(silver),
      bronze: Number(bronze),
    };

    setNames([...names, newName]);
  };

  const upDateFn = (e) => {
    e.preventDefault();

    if (nation === "") {
      alert("국가를 입력해주세요.");
      return;
    }

    const isAlreadyEx = names.find((name) => {
      return name.nation === nation;
    });

    if (isAlreadyEx) {
      setNames(
        names.map((name) =>
          name.nation === nation
            ? { ...name, gold: gold, silver: silver, bronze: bronze }
            : name
        )
      );
    } else {
      alert("등록되지 않은 국가입니다.");
    }
  };

  return (
    <form onSubmit={addFn}>
      국가명
      <input
        type="text"
        value={nation}
        onChange={(e) => {
          setNation(e.target.value);
        }}
      />
      금메달
      <input
        type="number"
        value={gold}
        onChange={(e) => {
          setGold(e.target.value);
        }}
      />
      은메달
      <input
        type="number"
        value={silver}
        onChange={(e) => {
          setSilver(e.target.value);
        }}
      />
      동메달
      <input
        type="number"
        value={bronze}
        onChange={(e) => {
          setBronze(e.target.value);
        }}
      />
      <button>추가</button>
      <button type="button" onClick={upDateFn}>
        수정
      </button>
    </form>
  );
};

export default Form;
