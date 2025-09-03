//Q) ek array bnao oske alag alag pair ke array bnao os pair ko add kren tw same ans aye sb pair ka
function findPairs(arr) {
    let pairs = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            if (arr[i] + arr[j] === 10) {
                pairs.push([arr[i], arr[j]]);
            }
        }
    }
    return pairs;
}

// Example usage:
let array = [1, 1, 2, 4, 4, 5, 5, 5, 5, 5, 6, 7, 9];
console.log(findPairs(array));

//just pair
 
function pair(...res){
let pairs=[]
for(let i=0;i<res.length;i++){
    for(let j=0;j<res.length;j++){
        pairs.push([res[i],res[j]])
    }
}
console.log(pairs)
}
pair(2,4,5,1,4,7,4,3,2)

//IF pair element plus =10 then make pair
function pair(arr){
let pairs=[]
for(let i=0;i<arr.length;i++){
    for(let j=i;j<arr.length;j++){
        if(arr[i]+arr[j]===10){
            pairs.push([arr[i],arr[j]])
        }
    }
}
console.log(pairs)
}
let arrays=[1,7,3,2,6,9,1,5]
pair(arrays)

//Also we can rest parameter

function numberpair(...rest){
    let addpairs=[]
for(let i=0;i<rest.length;i++){
    for(let j=i;j<rest.length;j++){
if(rest[i]+rest[j]===10){
addpairs.push([rest[i],rest[j]])
}
    }
}
console.log(addpairs)
}

numberpair(3,6,8,2,6,9,1,4)


//uniqueelement
let arr=[1,3,2,2,1,4,5,5,6,6,9,9,"apple","banana","apple"]
let uniqueelement=arr.filter((value,index)=>{
return arr.indexOf(value)===index
})



// SORT
let sequence=[5,2,8,9,12,4]
let get=sequence.sort((a,b)=>{
    return a-b
})
//a is 5 and b is 2, return value is 3 (positive), so 5 comes after 2
console.log(get)

//sare bari ayge isme pehle 5 se complete krega phr 2 se phr 8 sb ko check krega and wala rehjaega

//descending order
let sequence1=[5,2,8,9,12,4]
let get1=sequence1.sort((a,b)=>{
    return b-a
})
//negative value aygi phr be hum (a come after b krenge)
console.log(get)

//swaping

let a=5
let b=10
let swap=[a,b]=[b,a]




// let X=10
// let Y=20
// let reverse=[X,Y]=[Y,X]
// console.log("A",X)
// console.log("B",Y)

// let a=10
// let b=20
// let temp=a 
// a=b
// b=temp
// console.log(a)
// console.log(b)


//Reverse not built-in
// let names="Kashif"
// let reverse=""
// for(let i=names.length-1;i>=0;i--){
//  reverse+=names[i]
// }
// console.log(reverse)

//count vowels

//a e i o u

// let alphabets='abcdfghijklmnopqrstuvwxyz'
// let vowels=""
// let count=0
// for(let i=0;i<alphabets.length;i++){
// if(alphabets[i]=='a'){
// vowels+=alphabets[i]
// count+=+1
// }
// else if(alphabets[i]=='e'){
// vowels+=alphabets[i]
// count+=+1
// }
// else if(alphabets[i]=='i'){
// vowels+=alphabets[i]
// count+=+1
// }
// else if(alphabets[i]=='o'){
// vowels+=alphabets[i]
// count+=+1
// }
// else if(alphabets[i]=='u'){
// vowels+=alphabets[i]
// count+=+1
// }

// }
// console.log(vowels)
// console.log(count)



// let alphabets='abcdefghijklmnopqrstuvwxyz'
// let vowels=""
// for(let i=0;i<alphabets.length;i++){
//     if("aeiou".includes(alphabets[i])){
//         vowels+=alphabets[i]
//     }
// }
// console.log(vowels)

// let alphabets = 'abcdefghijklmnopqrstuvwxyz';
// let count = 0;

// for (let i = 0; i < alphabets.length; i++) {
//   if (alphabets[i] === 'a' ||alphabets[i] === 'e' ||alphabets[i] === 'i' ||alphabets[i] === 'o' ||alphabets[i] === 'u') {

//     count++;
//   }
// }

// console.log("Total vowels:", count); // 5


//Largest & Smallest number

// let numbers=[1,2,3,4,5,6,7,8,9,10]
// let greaternumber=numbers[0]
// for(let i=0;i<numbers.length;i++){
// if(greaternumber>numbers[i]){
//     greaternumber=numbers[i]
// }
// }
// console.log(greaternumber)


//Even ODD number
// let even=[1,2,3,4,5,6,7,8]
// let number=" "
// for(let i=0;i<even.length;i++){
//     if(even[i]%2!=0){
//         number+=even[i]

//     }
// }
// console.log(number)

// Prime number

let Prime=[1,2,3,4,5,6,7,8,37]

for(let i=0;i<Prime.length;i++){
    if(Prime[i]%2!=0){
        console.log("Prime",Prime[i])
    }
}

let names="maam"
let reverse=""
for(let i=names.length-1;i>=0;i--){

    reverse+=names[i]  
}
if(reverse==names){
    console.log("pallindrom")
}
else{
    console.log("not pallindrome")
}
