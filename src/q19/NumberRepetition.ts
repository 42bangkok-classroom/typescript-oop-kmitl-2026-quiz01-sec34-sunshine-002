let o = Number(process.argv[2])
if(isNaN(o)) {
  process.exit()
}

for(let i = 1; i <= o; i++) {
  console.log(`${i}`.repeat(o))
}