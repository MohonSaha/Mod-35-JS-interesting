function wellcomeMassage(name, greetHandler){
    greetHandler(name);

}

function greetMorning (name){
    console.log('Good Morning', name);
   
}
wellcomeMassage('Tom Hanks',greetMorning)