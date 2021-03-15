import { ExamDirectory } from "./examDirectory";

export class User {
    type:string;
    email: string;
    password: string;
    uploadedSummaries: [string];
    examsDirectories:  [ExamDirectory];
    imageUrl: string;
    followedCourses:[string];
    name: string;
    _id:string;
}


