function truncateString(value , number){
const place = value.slice(0,number);
const remain= place+"...";
let stringLength = (value.length)
 if ( number< stringLength){
   return remain;
 }else if (number => stringLength){
   return value;
 }
 else {
   undefined
 }

}
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8))
console.log(truncateString("Peter Piper picked a peck of pickled peppers", 11))
console.log(truncateString("A-tisket a-tasket A green and yellow basket", 43));