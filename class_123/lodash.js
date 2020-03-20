var l = require('lodash');
var arr1 = [1,2,3,4];
var arr2 = [1,1,1,2,5,6,7,8];
console.log(l.union(arr1,arr2));
console.log(l.filter([4,-1,7,7,-3,-5,1], function(val){
    return val > 0;
}))
var user = [{"name":"kriti",'age':15},{'name':"Ankur",'age':20}];
console.log(l.filter(user,{'age':15}))
console.log(l.uniqWith(arr2))
console.log(l.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor));