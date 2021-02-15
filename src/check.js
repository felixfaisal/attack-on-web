const fs = require('fs');
const { stdout } = require('process');
path = require('path');
const arr = require('./files');
const readline =require('readline')

console.log('arr', arr)

// async function readgit(callback){
//     const readInterface  = readline.createInterface({
//         input: fs.createReadStream('\.gitignore'),
//         // output: stdout,
//         console: false
//     });
// }
//     readgit((item) => {
//         item.on('line', async function(line) {
//             //console.log(line);
//             arr.push(line);
//             console.log(arr);
//         });
//     })
    

    // console.log('hello',arr);
    // console.log('newArr', newArr)
    // console.log('readInterface', readInterface)
    // console.log(callback, "callback")
//}

// readgit((item)=> {
//  arr.push(item)
//  console.log('array',readInterface)
// })

// readgit();
//     await readInterface.on('line',async (line) =>{
//        arr.push(line)
//     })
//     callback(arr)
    
// }

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