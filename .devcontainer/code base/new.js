//# Square-Star-Pattern-in-Javascript
let n=5;
let string = "";
  for (let i=1;i<n;i++)
  {
  for (let j=0;j<i;j++)
  {
    string = string + "*";
  }
      string = string + "\n";
  }
console.log(string);
