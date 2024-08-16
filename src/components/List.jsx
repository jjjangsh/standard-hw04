import React from "react";

const List = ({ names, setNames }) => {
  const deleteFn = (id) => {
    const deletedName = names.filter((name) => name.id !== id);

    setNames(deletedName);
  };

  return (
    <>
      {names.length > 0 && (
        <div>
          <table>
            <thead>
              <tr>
                <th>국가명</th>
                <th>금메달</th>
                <th>은메달</th>
                <th>동메달</th>
                <th>액션</th>
              </tr>
            </thead>

            <tbody>
              {names
                .sort((a, b) => b.gold - a.gold)
                .map((name) => (
                  <tr key={name.id}>
                    <td>{name.nation}</td>
                    <td>{name.gold}</td>
                    <td>{name.silver}</td>
                    <td>{name.bronze}</td>
                    <td>
                      <button
                        onClick={() => {
                          deleteFn(name.id);
                        }}
                      >
                        삭제
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
};

export default List;
