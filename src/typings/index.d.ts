
/**
 * Type of the Injectable metadata.
 *
 * @Annotation
 * @publicApi
 */
export interface Interceptor{
    onBefore?:any
    onAfter?:any
    onError?:any
    onSuccess?:any
}


export function Interceptor(arg0: Interceptor): ()=> any {
    if(arg0.onBefore) arg0.onBefore();
    try{
        console.log("Method");
        if(arg0.onSuccess) arg0.onSuccess();

    }catch(ex){
        
        if(arg0.onError) arg0.onError();
    }
    if(arg0.onAfter) arg0.onSuccess();
  }
  