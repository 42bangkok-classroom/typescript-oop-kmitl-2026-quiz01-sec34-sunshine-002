let a = process.argv

let max = a[2]
if(isNaN(Number(max))) {
  process.exit()
}
for(let i = 2; i < a.length; i++) {
  let current = a[i]
  if(isNaN(Number(a[i]))) { // always forget [i] at lc ( ` ᴖ ´ )!!
    continue
  }
  if(Number(current) > Number(max)) {
    max = a[i]
  }
}
console.log(max.toString())