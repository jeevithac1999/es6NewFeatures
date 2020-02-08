class Human {
  static someMethod(){
    console.log("has nothing to do with the instance");
  }
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
    this._spokenWords = [];
  }
  get name(){
    return this._firstName+" "+this._lastName;
  }
  set name(humanName){
    const [firstName="",lastName=""]=humanName.split(" ");
    this._firstName=firstName;
    this._lastName=lastName;
  }

  speak(word) {
    this._spokenWords.push(word);
    console.log(word);
  }
}
const jeevitha = new Human("Chamarthi", "Jeevitha");
console.log(jeevitha);
jeevitha.speak("hello");
console.log(jeevitha.name);
Human.someMethods();