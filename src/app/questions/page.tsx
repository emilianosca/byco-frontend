// "use client";
import React, {  Suspense } from "react";
import BoxQuestion from "@/components/boxQuestion";
import getDummyQuestions, { getDummyQuestion } from "@/utils/getRandomQ";
import getDate from "@/utils/getDate";
import Loading from "@/app/loading";

async function Question() {
  const data = getDummyQuestion();

  // destructuring object
  const question = data.question;
  const answersNumber = data.answersNumber;
  const createdAt = data.createdAt;

  return (
    <>
    <BoxQuestion
      question={question}
      answersNumber={answersNumber}
      createdAt={createdAt}
    />
    {/* <pre className="text-black">{JSON.stringify(data, null, 2)}</pre> */}
    </>
  );
}



export async function Page() {
  // const [isMounted, setIsMounted] = useState(false);
  // // This is a side effect that runs after the first render and sets the isMounted state to true
  // useEffect(() => {
  //   setIsMounted(true);
  // }, []);

  // // This is a conditional rendering that returns null if the component is not mounted yet
  // if (!isMounted) {
  //   return null;
  // }

  return (
    <>
      <Suspense fallback={<p>Loading weather...</p>}>
      <h1 className="text-black">¿Que piensas de esta pregunta?</h1>
        <Question />
      </Suspense>
    </>
  );
}

export default Page;
