export type Question = {
    id?: number;
    question:      string;
    answersNumber?: number;
    createdAt:     string | Date;
    rank?:          number; // 1 - 10 
}

export type Poll = {
    title: string;
    weight: number;
    questions: Question[];
}

export type User = {
    id?: number; //timeStamp
    ip?: string; // Location from post user
    typeOfDispositivo?: string; // Mobile, Desktop, Tablet
}

export type Questions = Question[];


