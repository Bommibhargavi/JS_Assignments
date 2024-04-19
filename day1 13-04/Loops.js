
console.log("Even numbers using for loop upto 200");
for(var i=1;i<=200;i++)
{
    if(i%2===0)
    {
        console.log(i);
    }
}

console.log("Even numbers using while loop upto 200");

var i=1;
while(i<=200){
    if(i%2===0){
        console.log(i);
    }
    i++;
}



console.log("even numbers upto 100");
for(var i=1;i<=100;i++)
{
    if(i%2===0)
    {
        console.log(i);
    }
}
console.log("even numbers upto 100 using while loop");
var w=1;
while(w<=100)
{
    if(w%2===0)
    {
        console.log(w);
    }
    w++;
}



console.log("even numbers upto 100 using do while loop");
d=1;
do{
    if(d%2===0)
    {
        console.log(d);
    }
    d++;
}
while(d<=100)


console.log("factors of i using for loop")
var i=4;
for(var j=1;j<=i;j++)
{
    if(i%j===0)
    {
        console.log(j);
    }

}
console.log("prime number program");
var num, i, chk=0;
num=7;
for(i=2; i<=num;i++)
{
    if(num%2==0)
    {
        chk++;
        break;
    }
}
    if(chk==0)
    {
        console.log(num+" is prime");
    }
   else{
    console.log(num+" is not a prime");
   }



console.log("checking wether number is prime");
var i=11;
var j;
for(j=2;j<=i;j++){
    if(i%j==0 && j<i){
        console.log(i + " is not prime number")
        break
    }
    
    else if(i%j==0 && j==i){
        console.log(i + " is a prime number")
    }
}

console.log("febonacci series");
var i=0;
console.log(i);
var j=1;
console.log(j);
var k=0;
for( j=1;j<=100;)
{
    k=i+j;
    
    console.log(k);
    i=j;
    j=k;

}
 
for(var i=1;i<=5;i++)
{
    var k=" ";
    for(var j=1;j<=i;j++)
    {
        k=k+j;
    }
        console.log(k);
    
}

for(var i=5;i>=1;i--)
{
    var s=" ";
    for(var j=5;j<=i;j--)
    {
        s="*"+s;
        
    }
    console.log(s);
  
}


console.log("palandrome");
var rev=0;
var a=1234;
var temp;
temp=a;
while(a>0)
{
    num=a%10;
    rev=rev*10+num;
    a=parseInt(a/10);
}
console.log(rev);

if(temp==rev)
{
    console.log(temp+"is a palandrome");
}
else{
    console.log(temp+" is not a papandrome ");
}

