export interface IResponse<T=object> {
    status?:number,
    message?:string,
    response?:T,
    hasError?:boolean
};