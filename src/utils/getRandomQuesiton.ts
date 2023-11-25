// will use dummy data for now
import data from "@/data/questions.json";

const Questions = data.Questions;

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
    
    return 'yes'!
    // write in the database
}