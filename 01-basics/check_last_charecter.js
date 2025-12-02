function confirmEnding(value, checker){
const length1=checker.length;
const chopped = value.slice (-length1);
 if(chopped==checker){
   return true;
 }else{
   return false;
 }
console.log(chopped);
}
console.log(confirmEnding("Bastian", "n"));