#include <stdio.h>
#include <stdlib.h>
#include <unistd.h>

void display(int array[]);
void bubbleSort();
void swap(int *a, int *b);

// global variable to keep max number inserted
int maxNumber = 0;

int main() {
	
	// asking for a array from user
	int i = 0;
	int array[10];
	
	printf("Enter 10 numbers in a random order :\n");
	for(i; i < 10; i++) {
		scanf(" %d",&array[i]);	
	}
	
	// finding the max number inside the array for printing purpose
	for(i = 0; i < 10; i++) {
		if(array[i] > maxNumber) {
			maxNumber = array[i];
		}
	}
	
	bubbleSort(array);
	
	return 0;
}

// will display the array that was passed 
void display(int array[]) {
	int i,j;
	int numOfElements = 10;
	
	for(i = 0; i < maxNumber; i++) {
		for(j = 0; j < numOfElements; j++) {
				if(array[j] >= maxNumber - i) {
					printf("# ");
				}
				else {
					printf("  ");
				}
		}
		printf("\n");
	}
	
	printf("\n");
	sleep(1);

}

void bubbleSort(int elements[]) {
	int j = 0, i = 0;
	int numOfElements = 10;
	
	display(elements);
	system("cls");
	
	// basic bubble sort logic
	while (j < numOfElements) {

		int swapOccured = 0;

		for(i = 0; i < (numOfElements - j); i++) {
			// checking does this need a swap
			if (i != ((numOfElements - 1) - j) && elements[i] > elements[i+1]) {
				swap(&elements[i], &elements[i+1]);
				swapOccured = 1;		
			}
		}
		
		system("cls");	
		
		display(elements);
		
		// modifying Algorithm to stop in the middle
		if (!swapOccured) {
			break;
		}
				
		j++;	
	}
	
}

// swapping 2 values
void swap(int *a, int *b) {
	int tempory = *a;
	*a = *b;
	*b = tempory;
}
