// this file makes a get request to the api, gets two questions and returns them
// as an array of objects

// will use dummy data for now
import data from "@/data/questions.json";
const Questions = data.Questions;

export function getDummyQuestions() {
  return Questions;
}

// this functions get only one question from all the poll of questions
export function getDummyQuestion(){
  const randomIndex = Math.floor(Math.random() * Questions.length);
  return Questions[randomIndex];
}

export default getDummyQuestions