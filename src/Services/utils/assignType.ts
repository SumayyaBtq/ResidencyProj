import {SelectOptions} from "../../types/UIRelated";

 
export function assignToType<T extends object>(obj: any, target: T): T {
  Object.keys(obj).forEach((key: string) => {
    if (target.hasOwnProperty(key)) {
      target[key as keyof T] = obj[key];
    }
  });
  return target;
}

export function assignToTypeArray<T extends object>(objArray: any[], objIterate:T ,target: T[]): T[] {
  for (let el of objArray) {
    objIterate = assignToType<T>(el,objIterate);
    let obj = {...objIterate}
    target.push(obj);  
  } 
  return target;
}


export function assignToSelectType<T extends object>(arrayn :T[] ,valuePropertyName:string ,labelPropertyName:string ):SelectOptions[]
{

  let returnOptions:SelectOptions[] =[];
   returnOptions= arrayn.map(n=>{       
    let obj:SelectOptions ={
      label:n[labelPropertyName  as keyof T] as unknown as string,
      value:n[valuePropertyName as keyof T] as unknown as string
    };
       return obj; 
      });
 
  return returnOptions;
 }