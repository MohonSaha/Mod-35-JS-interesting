function wellcomeMassage(name, greetHandler){
    greetHandler(name);
    // greetHandler()
}

function greetMorning (name){
    console.log('Good Morning', name);
   
}
wellcomeMassage('Tom Hanks',greetMorning)

