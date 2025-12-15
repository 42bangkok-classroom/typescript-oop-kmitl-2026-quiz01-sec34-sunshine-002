let tmp = Number(process.argv[2])
if(isNaN(tmp)) {
    process.exit()
}

if(tmp > 30) {
    console.log("Hot")
}
else {
    console.log("Normal")
}