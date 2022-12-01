let studentScores=new Map([["ram",54],["Shyam",58],["Mohan",84],["Raj",60]]);
console.log(studentScores.get("ram"));
studentScores.set("Rohan",64);  
console.log(studentScores.size);
studentScores.delete("Raj");

console.log(studentScores.has("Mohan"));


console.log(studentScores);
console.log(studentScores.keys());

for(let key of Array.from(studentScores.keys())){   
    console.log(key);
    console.log(studentScores.get(key));
}
console.log(studentScores.values());
console.log(studentScores.entries());
