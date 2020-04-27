const arr = [8,7,13,8,7,13,6,5,13,11,17,6,14,13,7,6,14,9,5,5,12,6,11,16,6,13,8,6,16,13,7,9,6,10,14,15,12,5,7,9,5,6,9,5,14,7,5,14,9,18,5,16,14];

const add = (a, b) => a+b;
const sum = (arr) => arr.reduce(add, 0);
const map = fn => x => x.map(fn);

const asc = (a, b) => a-b;

const getNum = map(x => x.num);
const getId = map(x => x.id);
const toKey = arr => getId(arr).sort(asc).join("-");

function fn(arr) {
  const input = arr.map((num, id) => ({id, num}));
  const seen = new Set();
  return combinations(input)
    .filter(sub => sum(getNum(sub)) === 40 )
    .filter(sub => {
      const k = toKey(sub);
      const exists = seen.has(k);
      seen.add(k);
    
      return !exists;
    })
    .map(getNum)
    //.sort((a, b))
  
}
function combinations(input) {
    var fn = function(active, rest, results) {
        if (!active.length && !rest.length)
            return;
        if (!rest.length) {
            results.push(active);
        } else {
            fn(active.concat(rest[0]), rest.slice(1), results);
            fn(active, rest.slice(1), results);
        }
        return results;
    }
    return fn([], input, []);
}
console.log(fn(arr));