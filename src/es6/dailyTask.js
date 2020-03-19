const cleanroom=()=>{ return new Promise((resolve,reject)=>{
  const isRoomCleaned=true;
  if(isRoomCleaned){
  resolve("Room is cleaned:)");
  }else{
  reject("Room not cleaned..!");
  }
  })
}
const goForAWalk=()=>{
  return new Promise((resolve,reject)=>{
  const walking=true;
  if(walking){
  resolve("Went for a walk:)");
  }else{
  reject("Did not go for a walk!!");
  }
  })
}
const BoughtIceCream=()=>{
  return new Promise((resolve,reject)=>{
  const boughtice=true;
  if(boughtice){
  resolve("Bought icecream...!");
  }else{
  reject("Did not bring icecream");
  }
  })
}
//es6
// cleanroom()
// .then(success=>{
//   console.log(success);
//   return goForAWalk();
// })
// .then(success=>{
//   console.log(success);
//   return BoughtIceCream();
// })
// .then(success=>{
  
// console.log(success)
// })
// .catch(error => {
//   console.error("Error happened: ", error);
// });

//es8
const myAsyncFunction=async()=>{
try{
const isCleaningSuccess=await cleanroom();
console.log(isCleaningSuccess);
if(isCleaningSuccess){
const isWalkComplete=await goForAWalk();
console.log(isWalkComplete);
const boughtice=await BoughtIceCream();
console.log(boughtice);
}
}catch(e){
console.error(e);
}
}
myAsyncFunction();