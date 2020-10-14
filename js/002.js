let arr = [200, 100, 300];

/* let temp = null;
arr.forEach((item, i) => {
	if(i === 1) {
		temp = arr[i+1];
		arr[i+1] = item * item;
	} 
	if(i === arr.length -1 ) {
		arr[i+1] = temp;
	}
}); */

arr.splice(2, 0, 10000);

console.log(arr);

/*
출력
[200, 100, 10000, 300]
*/




let myFish = ['angel', 'clown', 'mandarin', 'sturgeon']
let removed = myFish.splice(2, 0, 'drum')
console.log(myFish);
console.log(removed);