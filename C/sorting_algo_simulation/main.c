#include <stdio.h>

int main() {
	
	int elements[] = {5, 3, 9, 1, 7, 8, 2, 6, 4};
	int i,j;
	
	for(i = 0; i < 10; i++) {
		for(j = 0; j < elements[i]; j++) {
			printf("#\n");	
		}
	}
	
	return 0;
}
