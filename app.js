// ch38-48
// q1
// function power()
// {
//     var bas=prompt("enter base")
//     var exp=prompt("enter power")
//     var res=Math.pow(bas,exp)
// alert(res)
// }
// power();

// q2
// function checkLeap()
// {
//     var year=prompt("enter any year")
//     if(( (0 == year % 4) && (0 != year % 100)) || (0 == year % 400) )
//     {
//         alert("leap year")
//     }
//     else{
//         alert("not a leap")
//     }
// }
// checkLeap();

// q3
// function calcS(a,b,c)
// {
// var S=(a+b+c)/2
 
// return S
// }
// function calcA()
// {
// var a =+prompt('enter length of 1st side')
// var b =+prompt('enter length of 2nd side')
// var c =+prompt('enter length of 3rd side')
// var s=calcS(a,b,c)
 

// var A=Math.sqrt(s*(s-a)*(s-b)*(s-c))
// alert(A)

// }
// calcA();

// q4
// function calcP(a,b,c,mm){
// p=(a+b+c)*100/mm;
// return p
// }
// function calcA(a,b,c){
// return(a+b+c)/3
// }
// function mainF(){
// var a=+prompt('enter marks in 1st subj')
// var b=+prompt('enter marks in 2nd subj')
// var c=+prompt('enter marks in 3rd subj')
// var mm=300;
// var p = calcP(a,b,c,mm)
// alert("Percentage: "+p)
// var avg=calcA(a,b,c)
// alert("Average: "+avg)
// }
// mainF();

// q5
// function index()
// {
// var arr=['a','b','c','d','e']
// var ch='c'
// var i=0;
// while(i<arr.length){

//     switch(arr[i]==ch)
// {
//     case true:
//     alert("index of "+ch+ " is "+i);
//     break;
// }
//     i++
// }
// }
// index()




// q6
// var str="JavaScript (/ˈdʒɑːvəskrɪpt/),[10] often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.[11] As of 2022, 98% of websites use JavaScript on the client side for web page behavior,[12] often incorporating third-party libraries.[13] All major web browsers have a dedicated JavaScript engine to execute the code on users' devices. "
// delVowels(str)
// function delVowels(str)
// {
//     var i=0;
//     var newStr=str.replace(/[aeiou]/gi,"");
// alert(newStr)
// }

// q7
// var str = "Pleases read this application and give me gratuity"

// var i=0
// while(i<str.length){

// switch (str[i]=='a' || str[i]=='e' || str[i]=='i' || str[i]=='o' || str[i]=='u')
//     { case true:
//         switch(str[i+1]=='a' || str[i+1]=='e' || str[i+1]=='i' || str[i+1]=='o' || str[i+1]=='u'){
//             case true:
//             alert("two vowels in a row i.e "+str[i]+" "+str[i+1])
//             break;
//         }
//         break;
//     }
//     i++
// }


// q8
// function intoMetres(km)
// {
//     return(km*1000)
// }
// function intoCM(km)
// {
//     return(km*10000)
// }
// function intoFT(km)
// {
//     return(km*3280.84)
// }
// function intoINCH(km)
// {
//     return(km*39370.1)
// }

// var km=+prompt("Enter distance in km")
// alert("in metres: "+intoMetres(km))
// alert("in centimetres: "+intoCM(km))
// alert("in FEET: "+intoFT(km))
// alert("in INCHES: "+intoINCH(km))


// q9
// function calcOvertime(){
//     var hrs=+prompt("enter total hours that you worked")
//     var pay;
//     switch(hrs>40){
//         case true:
//         pay= (hrs-40)*12;
//         alert("your over time pay is: "+pay)
//         break;
//         default:
//         alert("you didnt work extra")
//     }
// }
// calcOvertime();


// q10
// function currencyCalc(amt){
// while(amt>=10)
// {
// if(amt>=100)
//    {var hundreds=Math.floor(amt/100);
//  amt=amt-(hundreds*100)
// console.log(amt)}
//   if(amt>=50){
//  var fifties=Math.floor(amt/50);
//  amt=amt-(fifties*50);
//  console.log(amt)}
//   if(amt>=10){
//     var tens=Math.floor(amt/10);
//     amt=amt-(tens*10);
//     console.log(amt)}
//  alert("you will get "+hundreds+" hundred rupee note, "+ fifties+" fifty rupee note and "+tens +" ten rupee note")
// }}
// var amt=+prompt("enter the amount you want to withdraw")
// currencyCalc(amt)

// ch43-48
// q3
// function Delete(id)
// {
//     var item= document.getElementById(id)
//     console.log(item.className)
//     document.getElementById(id).className+=" deleted"
// }

// q4
// function after()
//    { document.getElementById('img').src="img/mobile2.jpg"
//    }
//    function before()
//    { document.getElementById('img').src="img/mobile1.jpg"
//    }

// q5
var counter=0;
// document.getElementById('count').innerHTML= counter;
// function inc(){
//     counter=counter+1;
//     document.getElementById('count').innerHTML= counter;
// }
// function dec(){
//     counter=counter-1;
//     document.getElementById('count').innerHTML= counter;
// }


















