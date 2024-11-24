#include <stdio.h>

int main() {
	
	// initial values to pass
	int arr[] = {8,3,7,5,2,6};
	int arrLen = 6;
	int pivot = arrLen - 1;
	int nextGreaterVal = -1;
	int nextLowerVal = pivot - 1;
	int loopTill = -1;
	
	return 0;
}

void quickSort(int arr,int arrLen,int pivot,int nextGreaterVal,int nextLowerVal,int loopTill) {
	
	int pivotVal = arr[pivot];
	
	int pivotToPosition;
	
	// prototype
	int i,j;
	
	while(1) {
		
		// breaking point = array elements is 1 or 0
		
		nextGreaterVal = findGreaters(arr,nextGreaterVal+1,pivot);
		nextLowerVal = findLowesrs(arr,loopTill,nextLowestVal-1,pivot);
		
		if (nextGreaterVal != null) {
			loopTill = nextGreaterVal; // greater val dont pass | start ekata demu val ekak. greater ekakhoyagaddi eeka demu.	
		}
		
		if(nextGreaterVal != null && nextLowerVal != null) { // podi ekekuth innw loku ekekuth innw
			swap(&arr[nextGreaterVal],&arr[nextLowerVal]);
			pivotToPostion = nextGreaterVal + 1;	
			// need to find the next lower and higher value pair, we can loop this part
			qucikSort(arr,arrLen,pivot,nextGreaterVal,nextLowestVal,nextGreaterVal);
		} 
		
		// podi ekek withrk innw
		else if (nextLowerVal != null) { // insert , do not swap
			for(j = pivot; j > (nextLowerVal + 1); j--) {
				arr[j] = arr[j+1];
			}
			arr[nextLowerVal] = pivotVal;
			// call this method twice, for left and for right sub arrays
			
		}
		
		// loku ekek withrk innw
		else if (nextHigherVal != null) { // insert , do not swap
			int currHigherVal = arr[nextHigherVal];
			for(j = nextHigherVal; j > (pivot); j++) {
				arr[j] = arr[j+1];
			}
			arr[pivot] = currHigherVal;
			// call this method twice, for left and for right sub arrays
		}
		
		else { // podi ekekuth naa loku ekekuth naa
			if(findLowers == null) {
				swap(arr[pivot], arr[pivotToPosition]);
				// call this function with loopTill += 1, pivot = pivot, nextGreaterVal = loopTill, nextLowerVal = pivot - 1
			}
			else { // means there should be no swaps, but call for the next sub array
				
			}
		}
		
	}
}

// encapsulate quicksort algorithm, so we can use recurssion as well

// a for loop to run from given index
int findGreaters(int arr[],int i,int pivot) {
	for(i; i < pivot; i++) {
		if(arr[i] > arr[pivot]) {
			return i;
		}
	}
	return null; // means pivot is the highest |||| and we should stop execution 
}

// a for loop to run from given index backwards
int findLowers(int arr[],int loopTill,int i,int pivot) {
	for(i; i > loopTill; i--) {
		if(arr[i] < arr[pivot]) {
			return i;
		}
	}
	return null; // means pivot is the lowest |||| and we should swap with first element
}

// swaper
void swap(int *a,int *b) {
	int temp = *b;
	*b = *a;
	*a = temp;
}
