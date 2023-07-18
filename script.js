function threeSum(arr, target) {
	arr.sort((a,b)=> a-b);
	let closestSum=Infinity;
	for(let i=0;i<arr.length-2;i++)
		{
			let ptr1=i+1;
			let ptr2=arr.length-1;
			while(ptr1<ptr2)
				{
					const sum=arr[i]+arr[left]+arr[right];
					if(Math.abs(sum-target)<Math.abs(closestSum-target))
					{
						closestSum=sum;
					}
					if(closestSum<target)
					{
						left++;
					}
					else if(closestSum>target)
					{
						right--;
					}
					else
					{
						return sum;
					}
				}
		}
	return closestSum;
	
// write your code here
  
}

module.exports = threeSum;
