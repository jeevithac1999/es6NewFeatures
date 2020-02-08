const marks = [20, 50, 60, 20];
const increasedMarks = marks.map(mark => {
  return (mark = 5);
});
console.log("ïncreased marks", increasedMarks);
const simplifiedIncrease = marks.map(mark => mark + 5);
const filteredMarks = marks.filter(mark => {
  if (mark > 30) {
    return true;
  }
  return false;
});
const simplifiedFilter = marks.filter(mark => mark > 30);
console.log("Filtered marks", simplifiedFilter);
const findMarks = marks.find(mark => {
  if (mark == 20) {
    return true;
  }
  return false;
});
console.log("Found Mark", findMarks);

const simplifiedFind = marks.find(mark => mark == 20);

console.log("Found Mark(simplified):", simplifiedFind);
const reducer = (accumulator, mark) => {
  return accumulator + mark;
};
const totalMarks = marks.reduce(reducer, 0);
console.log("Total marks", totalMarks);
const simplifiedTotal = marks.reduce((acc, mark) => acc + mark, 0);
console.log("Total marks(simplified", simplifiedTotal);
const myTemplateHtml = text => `
<div><p>${text}</p></div>`;
console.log(myTemplateHtml("HI"));
const [english = 30, tamil = 30, science = 30, telugu = 30, hindi = 30] = marks;
console.log(english, tamil, science, telugu, hindi);
const myObject = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5
};
const { one, two, three, ...otherProps } = myObject;
console.log({ one: one, two: two, three: three });
console.log({ one, two, three });
function useLessFunction() {
  var myVariable = "aaa";
}
if (true) {
  var myVariable = "aaa";
  let Second = "ssss";
  const Third = "tttt";
}
console.log(myVariable);
//console.log(Second);
//console.log(Third);
