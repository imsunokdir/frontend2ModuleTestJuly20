/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  //Write your code here , just console.log

  // arr.map(dev=>{
  //   if(dev.profession === "developer"){
  //     console.log(dev.name)
  //   }
  // })

  let developers = arr
    .map((dev) => {
      if (dev.profession === "developer") {
        return dev;
      }
    })
    .filter((items) => items != undefined);
  developers.forEach((dev) => console.log(dev.name));
}
// PrintDeveloperbyMap()

function PrintDeveloperbyForEach() {
  //Write your code here , just console.log
  arr.forEach((dev) => {
    if (dev.profession === "developer") {
      console.log(dev.name);
    }
  });
}
// PrintDeveloperbyForEach()
function addData() {
  //Write your code here, just console.log
  let newItem = { id: 4, name: "susan", age: "20", profession: "intern" };
  arr = [...arr, newItem];
  arr.forEach((dev) => console.log(dev));
}
// addData()

function removeAdmin() {
  //Write your code here, just console.log
  let newArr = arr.filter((dev) => dev.profession != "admin");
  newArr.forEach((dev) => console.log(dev.name));
}
// removeAdmin()

function concatenateArray() {
  //Write your code here, just console.log
  let arr2 = [
    { id: 4, name: "David", age: "19", profession: "developer" },
    { id: 5, name: "Gracey", age: "21", profession: "admin" },
    { id: 6, name: "Lily", age: "22", profession: "developer" },
  ];
  let newArr = arr.concat(arr2);
  newArr.forEach((dev) => console.log(dev));
}
// concatenateArray()
