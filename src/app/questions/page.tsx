"use client";
import React from "react";
import BoxQuestion from "@/components/boxQuestion";
import getDummyQuestions, { getDummyQuestion } from "@/utils/getRandomQ";
import getDate from "@/utils/getDate";
import { useState, useEffect } from "react";

// export default function Questions({ params }: { params: { slug: string }  }) {
export async function Questions() {
  const [isMounted, setIsMounted] = useState(false);
  // This is a side effect that runs after the first render and sets the isMounted state to true
  useEffect(() => {
    setIsMounted(true);
  }, []);

  const questions = getDummyQuestions();
  const data = getDummyQuestion();
  // destructuring object

  const question = data.question;
  const answersNumber = data.answersNumber;
  const createdAt = data.createdAt;
  // change type of created At to Date
  // const createdAtFormat = getDate(createdAt);

  // console.log("type of createAt fromated", typeof createdAtFormat);

  // This is a conditional rendering that returns null if the component is not mounted yet
  if (!isMounted) {
    return null;
  }

  return (
    <>
      <h1 className="text-black">¿Que piensas de esta pregunta?</h1>
      <BoxQuestion 
        question={question}
        answersNumber={answersNumber}
        createdAt={createdAt}
      />
      <pre className="text-black">{JSON.stringify(data, null, 2)}</pre>
    </>
  );
}


export default Questions;