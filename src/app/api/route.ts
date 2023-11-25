import { NextRequest, NextResponse } from 'next/server'

export async function GET() {
  const res = await fetch(process.env.PATH_URL_BACKEND+'/api/posts', {
    headers: {
      'Content-Type': 'application/json',
    },
  })
  const result = await res.json()
  return NextResponse.json({ result })
}

export async function POST(request: NextRequest) {
  const body = await request.json()
  const res = await fetch(process.env.PATH_URL_BACKEND+'/api/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  const data = await res.json();
  return NextResponse.json(data)

}
// export const dynamic = 'force-dynamic' // defaults to force-static

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