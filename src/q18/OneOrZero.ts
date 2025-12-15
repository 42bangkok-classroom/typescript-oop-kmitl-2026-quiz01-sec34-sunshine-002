let aaa = Number(process.argv[2])
if(isNaN(aaa)) {
  process.exit()
}

for(let i = 1; i <= aaa; i++) {
  if(i % 2 == 0) {
    console.log("0".repeat(aaa))
  }
  else {
    console.log("1".repeat(aaa))
  }
}