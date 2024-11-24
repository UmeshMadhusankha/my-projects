#include <stdio.h>
#include <time.h>

void insertionSort(int arr[], int noOfElements);

int main() {
	
	int arr[] = {5, 13, 7, 11, 9};
	int noOfElements = 5;
	
	// printing initial array
	int i;
	printf("Initial Array: \n");
	for(i = 0; i < noOfElements; i++) {
		printf("%i ",arr[i]);
	}
	printf("\n");
	
	printf("After Sort: \n");
	clock_t start = clock();
	insertionSort(arr,noOfElements);
	clock_t end = clock();
	
	double excTime = (end - start) / (double) CLOCKS_PER_SEC;
	printf("Execution time: %lf \n",excTime);
	
	return 0;
}

void insertionSort(int arr[], int noOfElements) {
	
	// first element of the unsorted part , (technically this will be same as i)
	int seperatingIndex;
	int i,j,k,l;
	int currVal;
	// to keep track where the current (i th) element should be in the sorted part of array
	int currValsSortedIndex;
	
	for(i = 1; i < noOfElements; i++) {
		seperatingIndex = i;
		currValsSortedIndex = i;
		currVal = arr[seperatingIndex];
		
		// jumping to next iteration if current one is already in place
		if(arr[seperatingIndex] > arr[seperatingIndex-1]) {
			// print array and continue
			for(l = 0; l < noOfElements; l++) {
				printf("%i ",arr[l]);
			}
			printf("\n");
			continue;
		}
		
		// continue checking from current element to its' left (towards sorted array) to find relevent index
		for(j = i; j > 0; j--) {
			if(arr[j] > arr[i]) { // can optimize
				break;
			}
			currValsSortedIndex = j - 1;
		}
		
		// we know the current position (i) and where it should be (j)
		// so re arrange the sorted part of the array, but first of all break the loop if element is in right position to optimize code
		if (seperatingIndex == currValsSortedIndex) {
			// print array and continue
			for(l = 0; l < noOfElements; l++) {
				printf("%i ",arr[l]);
			}
			printf("\n");
			continue;
		}
		
		for (k = seperatingIndex; k > currValsSortedIndex; k--) {
			arr[k] = arr[k-1];
		}
		arr[currValsSortedIndex] = currVal;
		
		// printing the array after each iteration
		for(l = 0; l < noOfElements; l++) {
			printf("%i ",arr[l]);
		}
		printf("\n");
	}
}


