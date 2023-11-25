import React from "react";
// import dummy data from questions.json
import questions from "@/data/questions.json";

export default function Questions({ params }: { params: { slug: string }  }) {

  return (
    <div>
      <h1 className="text-black">Questions</h1>
      <pre className="text-black">{JSON.stringify(questions, null, 2)}</pre>
    </div>
  );
}
