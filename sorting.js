
var Numbers = [5,2,3,6,4,9,7,8]
var tmp = []; 
for (i = 0; i < Numbers.length; i++) {  
 
	for (j = 0; j < Numbers.length; j++) {  
		 
		if (Numbers[j] > Numbers[j+1]) { 
		 tmp = Numbers[j]; 
		 Numbers[j] = Numbers[j + 1]; 
		 Numbers[j + 1] = tmp; 
		} 
	} 
} 

console.log(Numbers)