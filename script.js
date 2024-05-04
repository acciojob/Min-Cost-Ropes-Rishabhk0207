function mincost(arr)
{ 
//write your code here
// return the min cost
	arr.sort((a, b) => a - b);
    
    let totalCost = 0;
    
    // Continue until there's only one rope left
    while (arr.length > 1) {
        // Extract the two shortest ropes
        let rope1 = arr.shift();
        let rope2 = arr.shift();
        
        // Connect the two ropes and calculate the cost
        let cost = rope1 + rope2;
        
        // Add the cost to the total
        totalCost += cost;
        
        // Insert the combined rope length back to the array
        arr.push(cost);
        // Re-sort the array
        arr.sort((a, b) => a - b);
    }
    
    return totalCost;
  
}

module.exports=mincost; 
