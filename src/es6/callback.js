/**
 * A simple Asynchronous function with a callback
 */
//traditional es5 way
// const fileSystemWrite=(text,completedCallback)=>{
//   setTimeout(()=>{
//   console.log("File is being written");
//   console.log(text);
//   completedCallback("Success");
//   });
// };
// const textTowrite="Hello World!";
// fileSystemWrite(textTowrite,status=>{
// console.log(`File write operation: ${status}!`);
// });

const fileSystemWrite = (text, completedCallback = () => null) => {
  setTimeout(() => {
    console.log("File is Being written!");
    console.log(text);
  completedCallback("Success");
  });
};
const textTowrite="Hello World!";

//fileSystemWrite(textTowrite);

fileSystemWrite(textTowrite, status => {
  console.log(`File write operation: ${status}!`);
  fileSystemWrite(textTowrite, status => {
    console.log(`File write operation: ${status}!`);
    fileSystemWrite(textTowrite, status => {
      console.log(`File write operation: ${status}!`);
      fileSystemWrite(textTowrite, status => {
        console.log(`File write operation: ${status}!`);
        fileSystemWrite(textTowrite, status => {
          console.log(`File write operation: ${status}!`);
          fileSystemWrite(textTowrite, status => {
            console.log(`File write operation: ${status}!`);
          });
        });
      });
    });
  });
});