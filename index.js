// var myphone={
//     make:"Apple",
//     model:"Iphone 7",
//     color:"red",
//     warrenty:12,
//     ring:function(){
//         console.log("deep deep deep!");
//     }
// };

const tab = ['marwa','iskander','samer','nadin','najla','mohammed'] ;

const nomPrenom = tab.map(v => {
    switch(v) {
        case 'marwa' : 
            return v+" dhawdi";
        case 'iskander' : 
            return v + " abbassi" 
        case 'samer' : 
            return v + " bouchen"
        case 'mohammed' : 
            return v + " khalladi" 
        case 'najla' : 
            return v + " gharbi" 
        case 'nadin' :
            return v + " yaakoubi"    
        default : return v                   
    }
});


console.log(nomPrenom); 























// let nadin = () => "yaakoubi" ; 

// console.log(tab.map(v => {
//     if( v.length > 5 ){
//         return v + " abbassi"
//     }
//     return v+" codingKis"
// }));




 //console.log(myphone);
 //console.log(myphone["ring"]()  );
 //console.log(Object.keys(myphone))

// console.log(Math.floor(Math.random()*100));


// function random_option(){
//     let options =Object.keys(myphone);
//     console.log(options.length);
//     const index = options[Math.floor(Math.random()*options.length)];
//     console.log(myphone[index]);

// }

//const tab=["iskander","nadine","mohamed"];
// console.log(tab.map(value=>{
//     if (value!=='nadine'){
//         return value
//     }
// }))

// console.log(tab.filter(v=>{
//     return v !== 'nadine'
// }))

//console.log(tab.includes('marwa'))


console.log("hello i'm iskander");