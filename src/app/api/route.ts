export const dynamic = "force-dynamic"; // defaults to force-static
import { NextRequest, NextResponse } from "next/server";
import data from "@/data/questions.json";

export async function GET() {
  const res = await fetch(process.env.PATH_URL_BACKEND+'/api/posts', {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const result = await res.json()
  const Questions = await data.Questions;
  const randomIndex = Math.floor(Math.random() * Questions.length);
  return NextResponse.json(Questions[randomIndex]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const res = await fetch(process.env.PATH_URL_BACKEND + "/api/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  const data = await res.json();
  return NextResponse.json(data);
}

// import data from "@/data/questions.json";
// const Questions = data.Questions;

// // this function returns one question from the poll
// export async function getDummyQuestion() {
//     // const res = await fetch('https://data.mongodb-api.com/...', {
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //     'API-Key': process.env.DATA_API_KEY,
//     //   },
//     // })
//     // const data = await res.json()

//     const data = Questions
//     return Response.json({ data })
//   }

// export function postQuestionChoosed(id: number, answer: string ){
//   return Questions;
// }
