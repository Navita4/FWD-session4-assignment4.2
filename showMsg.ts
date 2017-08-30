///<reference path="bundle1.ts"/>
///<reference path="bundle2.ts"/>

//consume the interface and 2 function with the help of namespace
let msg={
    num:20,
    item:"car"
};

//call namespace method
message.showMessage1(msg.num);
message.showMessage2(msg.item);

console.log("Show namespace and interface message");
