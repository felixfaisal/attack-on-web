const fs = require('fs');
path = require('path');

const arr = fs.readFileSync('../\.gitignore').toString().split("\n")
let val;
// console.log('arr', arr)
arr.map(item => {
    if(item[0]=='/')
    {
       val = item.slice(1);
       let index = arr.indexOf(item);
       arr[index] = val
    }
})
// // console.log('val', val)
// console.log("sliced array",arr);



function crawl(dir){
    const files = fs.readdirSync(dir);
    files.forEach(file=> {
        //console.log(file);
        if(arr.find((item => file==item)))
        {
            console.log('ignore file')
        }
        else
        {
            const next = path.join(dir,file)
                if(fs.lstatSync(next).isDirectory()==true) {
                    crawl(next);
                }
                else{
                    console.log('\t', next);
                }
        }
        
    })
}

crawl(__dirname);