export interface IAuthPost{
    username: string;
    password: string;
}

export interface IAuthResponse{
    data:string;
    error:IError;
}

export interface IError{
    code:number;
    status:string;
    description:string;
}

export interface IBuildingResponse{
    id:number;
    title:string;
}

export interface IAuditory{
    id:number;
    name:string;
    number:string;
    buildName:string;
    buildId: number;
    height: number;
    length: number;
    width: number;
}

export interface ITimeTable{
    id:number;
    /**
     * 
     * @example "2022-11-18"
     */
    dateEvent: string;
    startTime: string;
    endTime: string;
}

export interface IDiscipline{
    id:number;
    title:string;
}