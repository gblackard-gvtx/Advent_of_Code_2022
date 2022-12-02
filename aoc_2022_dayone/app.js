const {readFileSync, promises: fsPromises} = require('fs');
const readFileGetMax = (fileName)=>{
    let content = readFileSync(fileName,'utf-8');
    const arr = content.split(/\r?\n/);
    let max = 0;
    let total = 0;
    let totalArr=[];

    arr.forEach(element => {
        if(element===''){
            totalArr.push(total);
            if (total>max) {
                max = total
            }
          total=0; 
        }else{
            total+=parseInt(element)
        }
    });
    totalArr.sort();
    totalArr.reverse();
    console.log("Highest: " + max);
   let totalTop = totalArr[0]+totalArr[1]+totalArr[2];
   console.log("Three Highest Proformers Total: "+ totalTop);
    
}
const file = './calories.txt'
readFileGetMax(file);