export type Pokedex = {
    Questions: Question[];
}

export type Question = {
    question:      string;
    answersNumber: number;
    createdAt:     Date;
}
