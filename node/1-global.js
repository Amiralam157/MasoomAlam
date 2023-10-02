// GLOBALS - NO WINDOW !  !  !


// __dirname - path to current FileSystemDirectory
// __filename - file name
// require  - function to use modules (commonJS)
// module   - info about current module (file)
// process   - info about env where the program is executed


console.log(__dirname);
console.log(__filename);
setInterval(() => {
    console.log("Hello World");
},1000)