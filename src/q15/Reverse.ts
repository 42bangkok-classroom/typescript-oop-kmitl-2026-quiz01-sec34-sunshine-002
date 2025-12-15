let R = process.argv[2]

let t = ""
for(let i = 0;i < R.length; i ++) {
    t += R[R.length-1-i]
}
console.log(t)