const fs = require('fs');
const { stdout } = require('process');
path = require('path');
let arr = [];
const readline =require('readline')
function readgit(callback){
    const readInterface  = readline.createInterface({
        input: fs.createReadStream('\.gitignore'),
        output: stdout,
        console: false
    });
    console.log(readInterface)
}
// readgit();
//     await readInterface.on('line',async (line) =>{
//        arr.push(line)
//     })
//     callback(arr)
    
// }
readgit((item)=> {
 arr.push(item)
 console.log('array',readInterface)
})

// fs.readFile('./\.gitignore','utf8',(err,data)=>{
//     if(err)
//     {
//         console.log(err)
//         return
//     }
//     console.log(data)
// })


// function crawl(dir){
//     const files = fs.readdirSync(dir);
//     console.log(files)
//     files.forEach(file=> {
//         //console.log(file);
//         // if(arr().find(file))
//         // {
//         //     console.log("this file has been ignored");
//         // }
//         // else
//         // {
//             const next = path.join(dir,file)
//                 if(fs.lstatSync(next).isDirectory()==true) {
//                     crawl(next);
//                 }
//                 else{
//                     // console.log('\t', next);
//                 }
//         // }
        
//     })
// }

// crawl(__dirname);

// console.log(arr());