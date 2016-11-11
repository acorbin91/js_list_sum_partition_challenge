/* Function takes a list of 4 integers, and partitions them into two lists whose values have equal sums. Sum of list must be divisible by two or function will return invalid results. */

function PartitionProblem(list) {
	//get sum of all items in list
	var sum = list.reduce((a, b) => a + b, 0);
	//determine what the sum of each list should be
	var subListSum = sum / 2;
	if((sum % 2 !== 0)) return console.log("Error, sum of integers is not divisible by two!");

	var sublists = {};
	//loop list and create sub-lists
	for(i=0; i<list.length; i++) {
		if(i ==2) break;
		//find minimum and maximum values in current iteration of list
		var max = Math.max.apply(Math, list); 
		var min = Math.min.apply(Math, list);
		
		//create sub-list with min/max values
		sublists[i] = [min, max];
		
		
		//remove min/max items from list for next iteration
		list.splice(list.indexOf(min), 1);
		list.splice(list.indexOf(max), 1);
			
		//if our min+max dont add up to the desired sum, we need to loop the remaining integers to find the right sum, then return that as a sub-list
		if(min+max != subListSum) { 
			var curSum = min+max;
			for(z=0; z<list.length; z++) {
				if(list[z] + curSum == subListSum) sublists[i].push(list[z]);
			}
			
		}
	}
	return sublists;
}

console.log("Example 1:");
/* Working Examples */
var list = [1,4,5,0];
var partitions = PartitionProblem(list);
for (var key in partitions) {
   var partition = partitions[key];
   console.log(partition)
}

console.log("Example 2:");
/* Example with order of values rearranged (same output) */
var list = [5,4,1,0];
var partitions = PartitionProblem(list);

for (var key in partitions) {
   var partition = partitions[key];
   console.log(partition)
}

console.log("Example 3:");
/* Example with different values altogether */
var list = [20,5,15,10];
var partitions = PartitionProblem(list);

for (var key in partitions) {
   var partition = partitions[key];
   console.log(partition)
}


console.log("Example 4:");
/* Example with sum of integers that is not divisible by two (will return error) */
var list = [3,5,15,10];
var partitions = PartitionProblem(list);

for (var key in partitions) {
   var partition = partitions[key];
   console.log(partition)
}

console.log("Example 5:");
/* Example with more than 4 values in list (still works as long as sum is divisible by two) */
var list = [20,5,15,10,5,0,5];
var partitions = PartitionProblem(list);

for (var key in partitions) {
   var partition = partitions[key];
   console.log(partition)
}
