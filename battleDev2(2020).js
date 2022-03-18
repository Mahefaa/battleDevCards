//Battledev level 2 2020 by Mahefa Ny Anjara
let tableversion=(table)=>{
    let count=1;
    let list=[];

    for(let i=0;i<table.length;i++){
        if(table[i]==table[i+1]) count++;
        else{
            list.push(count);
            count=1;
        }
    } 
    //Count every serie and put the count in a table 
    return Math.max(...list); //then we take the max 
}
console.log(`The longest serie is ${tableversion(table)}`);

// remove the "/**/" if you want to use this version. Result will be the same !
/*let objectversion=(table)=>{
    let list={temp:1,};
    for(let i=0;i<table.length;i++){
        if(!list[table[i]]){ //we verify if  table[i] exists as a property in our object
            list[table[i]]=1;
        }
        if(list[table[i]]){
            if(table[i]==table[i+1]){ //if the serie continues
                list.temp++; // we put a temp because 
                //there can be many series of the same number  and we only need the longest so we need to compare same number's series length
            }
            else{//here's the comparison
                if(list.temp>list[table[i]]) list[table[i]]=list.temp;
                list.temp=1; //we reset its value then we test other numbers
            }
        }
    }
    let values=Object.values(list); //we take every property's value and put those in a table
    return Math.max(...values);
}*/

let table=[1,1,2,3,3,3,5];
console.log(`The longest serie is ${objectversion(table)}`);
