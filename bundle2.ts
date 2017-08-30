///<reference path="bundle1.ts" />
//declare namespace message with method
namespace message{
    //show message with item
    export function showMessage2(item:string){
        console.log("showing second message,because I got 5 ${item} ");
    }
}
