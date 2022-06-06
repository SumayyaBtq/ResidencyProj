
export class UserInfo {
    userId: number = 0;
    mobileNumber?: string;
    email?: string = "";
    residencyByMoa: boolean = false;
    isSapUser: boolean = false;
    civilId: string = "";
    civilIdSerialNumber?: string = "";
    employeeNumber?: string;
    employeeName: string = "";
    employeeType?: string;
    sector?: string;
    department?: string;
    section?: string;
    nationalityId?: string ;
    nationality: string = "";
    birthDate?: Date;
    hireDate?: Date;
    jobTitle?: string;
    organization?: string;
    userTypeId: number = 0;
    registrationStatusId: number = 0;
    isAdmin:boolean=false;
}

interface AuthenticateResult {
    userInfo: UserInfo,
    jwtToken: string
}

export class AuthenticateResponse {
    response:AuthenticateResult = {
        userInfo: userInfo,
        jwtToken:""
    }
    status: number = 0;
    message: string = "";
    hasError: boolean = false;
    isLoggedIn:boolean = false;
}


export const userInfo = new UserInfo();
export const authenticateResponse = new AuthenticateResponse();