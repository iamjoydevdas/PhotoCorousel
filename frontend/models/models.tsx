export interface IJobs {
    name: string;
    description: string;
    publisher: string;
    published_at: string;
}

export interface IRegister {
    username: string;
    email: string;
    password: string;
    usertype: string;
}

export interface ILogin {
    identifier: string;
    password: string;
}


//to do rename as profile
export interface IJobSeerkerRegistration {
    currentOrg: string;
    fname: string;
    lname: string;
    address: string;
    exp: string;
    skill: string; 
    resumeId: string; 
    userIdMapping: string;
}

export interface IEmployerRegistration {
    orgName: string;
    orgBio: string;
    orgHeadOfficeAddress: string;
    orgHistory: string;
    userIdMapping: string;
}

export interface IOffers {
    jobTitle: string;
    jobDescription: String;
    salary: String;
    primarySkills: String;
    additionalSkills: String[];
    addSkills: any;
    location: String;
}