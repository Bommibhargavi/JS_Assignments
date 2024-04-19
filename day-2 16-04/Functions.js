for(var i=5;i>=1;i--)
{
     var s=" ";
    for(var j=1;j<=i;j++)
    {
        s="*"+s;
       
    }
    console.log(s);   
}

debugger
for(var i=5;i>=1;i--)
{
     var s=" ";
    for(var j=1;j<=i;j++)
    {
        s=j+s;
       
    }
    console.log(s);   
}
 
// var i=5;
// while(i>=0)
// {
//     var str=" ";
//     var j=5;
//     while(j<=i)
//     {
//         str+=j;
//         j++;
//     }
//     console.log(str);
//     i--;
// }

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

