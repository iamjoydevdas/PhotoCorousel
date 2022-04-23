/* export class IResponseUser {
    id?: string;
    email?: string;
    username?: string;
    usertype?: string;

    constructor(data: IResponseUser){
        this.id = data.id;
        this.email = data.email;
        this.username = data.username;
        this.usertype = data.usertype;
    }
}

export class IResposeData {
    jwt?: string;
    user?: IResponseUser;

    constructor(data : IResposeData){
        this.jwt = data.jwt;
        const user: IResponseUser = new IResponseUser(data.user);
        this.user = user;

    }
}
 */

/* export class IRegisterResponse {
    data?: IResposeData;
} */