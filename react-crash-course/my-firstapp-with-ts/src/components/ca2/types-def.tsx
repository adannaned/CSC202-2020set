import { ModeOfEntry } from 'C:/Users/nedon/OneDrive/Documents/CSC202-2020set/nest-waf-primer/src/student-registration/studentRegistration.types';
export type Student = { 
    id: number,
    department: string;
    matriculationNumber: string;
    modeOfEntry: ModeOfEntry;
    programOfStudy: string;
    yearOfEntry: number;
}
