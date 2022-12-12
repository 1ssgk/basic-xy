import React, { useState } from "react";

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: "엘리",
    title: "개발자",
    mentor: {
      name: "밥",
      title: "시니어개발자",
    },
  });

  const changeMentorName = () => {
    let name = prompt(`what's your mentor's name?`);
    setPerson((prev) => ({ ...prev, mentor: { ...prev.mentor, name: name } }));
  };
  const changeMentorTitle = () => {
    let title = prompt(`what's your mentor's title?`);
    setPerson((prev) => ({ ...prev, mentor: { ...prev.mentor, title: title } }));
  };

  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button onClick={changeMentorName}>멘토이름 바꾸기</button>
      <button onClick={changeMentorTitle}> 멘토 타이틀 바꾸기</button>
    </div>
  );
}
