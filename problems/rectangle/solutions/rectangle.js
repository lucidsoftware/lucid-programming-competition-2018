function solve(l,u){
	var products = {};
	var sums = {};

	for(var i=l; i<=u; i++){
		for(var j=i; j<=u; j++){
			var sum = i+j;
			var product = i*j;
			if(!sums[sum]) sums[sum] = [];
			if(!products[product]) products[product] = [];
			sums[sum].push([i,j]);
			products[product].push([i,j]);
		}
	}
	//I don't know what a and b are
	var step1 = {};
	for(var product in products){
		if(products[product].length > 1){ //there are multiple options to get this product
			step1[product] = products[product];
		}
	}
	//I knew that
	var step2 = {};
	for(var sum in sums){
		if(sums[sum].every(function(arr){ //all of the options to get this sum are in step1
			return arr[0]*arr[1] in step1;
		})){
			step2[sum] = sums[sum];
		}
	}
	//Now I know what they are
	var step3 = {};
	for(var product in step1){
		var filtered = step1[product].filter(function(arr){
			return arr[0] + arr[1] in step2;
		});
		//there is only one option out of the factors of product that is in step2
		if(filtered.length == 1){
			step3[product] = filtered;
		}
	}
	//I now know too
	var step4 = [];
	for(var sum in step2){
		var filtered = step2[sum].filter(function(arr){
			return arr[0]*arr[1] in step3;
		});
		//there is only 1 option out of the summands of sum that is in step3
		if(filtered.length == 1){
			step4.push(filtered[0]);
		}
	}
	return step4.sort((a,b) => a[0] - b[0] || a[1] - b[1]).map(function(arr){return arr.join(' ')}).join('\n');
}

const chunks = [];
process.stdin.on('data', d => chunks.push(d));

process.stdin.on('end', () => {
	const data = chunks.join('').trim().split('\n').map(x => parseInt(x));
	const result = solve(data[0], data[1]);
	if(result.length > 0) {
		console.log(result);
	}
});
