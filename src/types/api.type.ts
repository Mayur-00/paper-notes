
export interface ApiReturnObject {
    success?:boolean,
    error?:string,
    message?:string,
  
    status?:number;
};

export interface SendEmailParamObj {
    verifyCode:string;
    userId:string
    emailType:string;
    emailId:string;
    username:string

}