import React, { useReducer } from "react";
import { useImmer } from "use-immer";

export default function AppmentorsImmer() {
  const [person, updatePerson] = useImmer(initialPerson);

  const handleUpdate = () => {
    let prev = prompt(`누구의 이름을 바꾸고 싶은가요?`);
    let current = prompt(`이름을 무엇으로 바꾸고 싶은가요?`);
    updatePerson((person) => {
      const mentor = person.mentors.find((m) => m.name === prev);
      mentor.name = current;
    });
  };

  const handleAdd = () => {
    let name = prompt(`추가할 멘토의 이름은 무엇인가?`);
    let title = prompt(`추가할 멘토의 타이틀은 무엇인가?`);
    updatePerson((person) => {
      person.mentors.push({ name, title });
    });
  };
  const handleDelete = () => {
    let name = prompt(`삭제할 멘토의 이름은 무엇인가?`);
    if(!name) return;
    updatePerson((person) => {
      const index = person.mentors.findIndex((m) => m.name === name);
      person.mentors.splice(index, 1);
    });
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>{person.name}의 멘토는 :</p>
      <ul>
        {person.mentors.map((mentor, index) => (
          <li key={index}>
            {mentor.name} ({mentor.title})
          </li>
        ))}
      </ul>
      <button onClick={handleUpdate}>멘토의 이름 바꾸기</button>
      <button onClick={handleAdd}> 멘토 추가하기</button>
      <button onClick={handleDelete}> 멘토 삭제하기</button>
    </div>
  );
}

const initialPerson = {
  name: "엘리",
  title: "개발자",
  mentors: [
    {
      name: "밥",
      title: "시니어개발자",
    },
    {
      name: "제임스",
      title: "시니어개발자",
    },
  ],
};
