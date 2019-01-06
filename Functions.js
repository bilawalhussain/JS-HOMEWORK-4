
let checkName=name=>{
    if (name==="man" || name==="socrates")
        return true;

    else
        return false;
}

let callCheckManOrSocrates=()=>{
    let name="man";
    //let name="socrates";
    //let name="woman";
    if (checkName(name)){
        console.log("It is either man or socrates and both are mortal");
        if (name==="man")
            console.log("Its man and they are mortal");   
        else
            console.log("It is socrates since they are man they are mortal");
    }
    else
        console.log("It is not a man nor socrates so it is not mortal");
}

callCheckManOrSocrates();           // main task

let checkCake = (myArr,checkChocolate)=>{
    if (!checkChocolate)
        return "It is Vanilla";
    else
        return "Its Chocolate";
}



let Flavours=[
    {name: "Vanilla"},
    {name: "Chocolate"},
    {name: "Stawberry"} 
];
let checkCondition=false,count=1;

// Loop to check whether chocolate is present in the object array or not
let checkFlavour=Flavours.map(function(flavour){
    console.log(count+": "+flavour.name);
    if (flavour.name==="Chocolate"){
        checkCondition=true;
    }
    count++;
});
checkFlavour;
console.log(checkCake(Flavours,checkCondition));        // calling function (bonus task)