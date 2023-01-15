import React, { useState } from "react";

const obj = {
  name: "엘리",
  title: "개발자",
  mentor: {
    name: "밥",
    title: "시니어개발자",
  },
};

const updateName = "업데이트 이름";
const update = {
  ...obj,
  mentor: { ...obj.mentor, name: updateName },
};
console.log(update);

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: "엘리",
    title: "개발자",
    mentor: {
      name: "밥",
      title: "시니어개발자",
    },
  });
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>
        {person.name}의 멘토는 {person.mentor.name} ({person.mentor.title})
      </p>
      <button
        onClick={() => {
          const name = prompt(`what's your mentor's name?`);
          setPerson((person) => ({
            ...person,
            mentor: { ...person.mentor, name },
          }));
        }}
      >
        멘토 이름 바꾸기
      </button>
      <button
        onClick={() => {
          const title = prompt(`what's your mentor's title?`);
          setPerson((person) => ({
            ...person,
            mentor: { ...person.mentor, title },
          }));
        }}
      >
        멘토 타이틀 바꾸기
      </button>
    </div>
  );
}
