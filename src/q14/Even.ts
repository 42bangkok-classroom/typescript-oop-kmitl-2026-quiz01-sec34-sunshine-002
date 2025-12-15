let E = Number(process.argv[2])
if(isNaN(E)) {
    process.exit()
}

for(let i = 0; i <= E; i++) {
    if(i % 2 === 0) {
        console.log(i)
    }
}