let list1 = ["a", "b", "c"];
let list2 = [1, 2, 3];

function zipList(list1, list2){
    let newList = [];
      for(let i = 0; i < list1.length; i++){
          newList.push(list1[i]);
          newList.push(list2[i]);
      }
     return newList;
}

console.log(zipList(list1, list2));

function zipListTheSimpleWay(list1, list2){
  return _.reduceRight(_.zip(list1, list2),  function(a, b) { return b.concat(a); }, []);
}

console.log(zipListTheSimpleWay(list1, list2));