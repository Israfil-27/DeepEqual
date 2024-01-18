// let a = {a:2,b:2,c:{a:1, tet: [ {test: "12"}]}}
// let b = {a:2,b:2,c:{a:1, tet: [ {test: "12"}]}}
// let c ={y:2,e:2,c:{a:1, tet: [ {test: "12"}]}}
// let e ={y:2,e:2,c:{a:1, tet: [ {test: "12"}]}}
let d ={y:2,e:2,c:{a:1, tet: [ {test: "12"} , {a:"salam"}],}}
let n ={y:2,e:2,c:{a:1, tet: [ {test: "12"} , {a:"sala"}],}}




function deepequal(p1, p2) {
    if (typeof p1 !== 'object' || p1 === null || typeof p2 !== 'object' || p2 === null) {
      return p1 === p2;
    }
    const keys1 = Object.keys(p1);
    const keys2 = Object.keys(p2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (let i = 0; i < keys1.length; i++) {
      const key = keys1[i];
      if (typeof p1[key] === 'object' && typeof p2[key] === 'object') {
        if (!deepequal(p1[key], p2[key])) {
          return false;
        }
      } else {
        if (p1[key] !== p2[key]) {
          return false;
        }
      }
    }
    return true;
  }
  console.log(deepequal(d,n));