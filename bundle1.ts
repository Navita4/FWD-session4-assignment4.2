// create namespace and add an interface
namespace message{
    // create interface with two properties ,one for namespace and another for bundle2

    export interface messageType{
        num:number;
        item:string;
    }
    //show message with number first
    export function showMessage1(num:number){
        console.log("showing first message,because i am rouming ${num} places");
    }

}