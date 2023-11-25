import { Questions } from "@/data/questions.json";
export const dynamic = 'force-dynamic' // defaults to force-static

// this function returns one question from the poll
export function getDummyQuestion() {
    // const res = await fetch('https://data.mongodb-api.com/...', {
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'API-Key': process.env.DATA_API_KEY,
    //   },
    // })
    // const data = await res.json()

    const data = Questions
    return Response.json({ data })
  }

export function postQuestionChoosed(id: number, answer: string ){
  return Questions;
}