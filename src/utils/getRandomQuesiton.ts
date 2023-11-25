// will use dummy data for now
import { Questions } from "@/data/questions.json";

// get just one q from the poll
export function getDummyQuestion(){
    const randomIndex = Math.floor(Math.random() * Questions.length);
    return Questions[randomIndex]; // 
  }


// get two questions from the poll
export function getDummyQuestions() {
    const randomIndex1 = Math.floor(Math.random() * Questions.length);
    const randomIndex2 = Math.floor(Math.random() * Questions.length);
    return [Questions[randomIndex1], Questions[randomIndex2]];
}

// post 
function postQuestionChoosed(id: number, answer: string ){
    // answer = "yes <3" | "no x" | 
    

    // write in the database
}