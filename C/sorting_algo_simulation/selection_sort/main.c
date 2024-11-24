#include <stdio.h>
#include <time.h>

void selectionSort(int arr[],int numOfElements);
void selectionSortEnhanced(int arr[],int numOfElements);
void swap(int *a, int *b);

int main() {
	// array input
	int arr[] = {5 , 11 , 3 , 17 , 9, 16, 5, 7, 0, 15};
	int arrCopy[] = {5 , 11 , 3 , 17 , 9, 16, 5, 7, 0, 15};
	int numOfElements = 10;
	int i;
	clock_t start,end;
	double excTime1, excTime2;
	
	printf("Sample Input : \n");
	// printing current array
	for(i = 0; i < numOfElements; i++) {
		printf("%d ",arr[i]);	
	}
	printf("\n");
	
	// selection sort
	printf("\nSelection Sort\n");
	
	// recording time 
	start = clock();
	// calling function
	selectionSortEnhanced(arr,numOfElements);
	// ending time recording
	end = clock();
	// calculating in seconds
	excTime1 = (end-start) / (double) CLOCKS_PER_SEC;
	printf("Execution Time for Enhanced Selection Sort : %lf\n",excTime1);
	
	// ------------------------------------------------------------------
	
	// enhanced selection sort
	printf("\nEnhanced Selection Sort\n");
	
	// recording time 
	start = clock();
	// calling function
	selectionSortEnhanced(arrCopy,numOfElements);
	// ending time recording
	end = clock();
	// calculating in seconds
	excTime2 = (end-start) / (double) CLOCKS_PER_SEC;
	printf("Execution Time for Enhanced Selection Sort : %lf\n",excTime2);
	
	return 0;
}

void selectionSort(int arr[],int numOfElements) {
	
	int i,j,k,currMin,minValIndex,minVal;
	
	// outer loop is set to numOfElements - 1 bcz last position will sort automatically
	for(i = 0; i < numOfElements - 1; i++) {
		// setting the initial minimum value to the first un sorted element
		minVal = arr[i];
		minValIndex = i;
		
		// finding the minimum value
		for(j = i; j < numOfElements; j++) {
			if (minVal > arr[j]) {
				minVal = arr[j];
				minValIndex = j;
			}			
		}
		
		// if the current first unsorted value is already in the right place
		if (minValIndex == i) {
			continue;
		}
		
		// re arranging the array part of unsorted elements which were between current lowest and sorted part 
		for (k = minValIndex; k > i; k--) {
			arr[k] = arr[k-1];
		}
		// inserting current minimum value to its' relevant position
		arr[i] = minVal;
		
		// printing current array
		for(j = 0; j < numOfElements; j++) {
			printf("%d ",arr[j]);	
		}
		printf("\n");
	}
	
}

void selectionSortEnhanced(int arr[],int numOfElements) {
	
	int i,j,k,currMin,minValIndex,minVal;
	
	// outer loop is set to numOfElements - 1 bcz last position will sort automatically
	for(i = 0; i < numOfElements - 1; i++) {
		// setting the initial minimum value to the first un sorted element
		minVal = arr[i];
		minValIndex = i;
		
		// finding the minimum value
		for(j = i; j < numOfElements; j++) {
			if (minVal > arr[j]) {
				minVal = arr[j];
				minValIndex = j;
			}			
		}
		
		// if the current first unsorted value is already in the right place
		if (minValIndex == i) {
			continue;
		}
		
		// swap current min value with the i th position
		swap(&arr[i],&arr[minValIndex]);
		
		// printing current array
		for(j = 0; j < numOfElements; j++) {
			printf("%d ",arr[j]);	
		}
		printf("\n");
	}
	
}

// swapping 2 values
void swap(int *a, int *b) {
	int tempory = *a;
	*a = *b;
	*b = tempory;
}
