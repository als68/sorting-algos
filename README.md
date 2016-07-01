# sorting-algorithms

A rundown of some sorting algorithms follows.  The goal of every algorithm is to sort an array of numbers from lowest to highest.

1) Bubble Sort
Description: The sorting starts from the left and makes its way right.  Bubble sort compares two neighboring values and places the lower value on the left.  It then makes its way over to the next value in the array and compares those two values and so on.
Base case scenario: If the array is already sorted, the sort makes one pass and does nothing.
Worst case scenario: If the array is sorted completely backwards, the sort needs to make a swap and a full pass for each value.

2) Quick Sort
Description: A random value (called the pivot) is selected in the array.  Numbers from the array are compared to the pivot and set aside in "lower" and "higher" arrays.  From there, each of these new arrays have their own pivot selected and continue to be broken down as before until the arrays cannot be broken down further.  From there, the arrays are reassembled in order.
Base case scenario: Each new pivot is exactly in the middle of the values that will be separated.  No sorting needed in this case.
Worst case scenario: Each new pivot is the highest or lowest value in that array, making more and more array breaks needed.

3) Merge Sort
Description: An array is split into two, and this splitting continues until the arrays cannot be broken down further.  The values are then compared to neighboring values, sorted (lowest pushed to left), then reassembled.  A key distinction between merge sort and quick sort is _when_ the sorting occurs: merge sort sorts as the values are being merged, while quick sort sorts as the arrays are being divided around the pivot.
Base case scenario: If the array is already in order, no sorting needs to be done when the arrays are being merged.
Worst case scenario: The numbers are arranged in a way where every pair is backwards, making a swap necessary with each merge.

4) Insertion Sort
Description: A value in an array is picked.  The value is then compared to the other values in the array one-by-one and placed accordingly.
Base case scenario: Array is in order.  No swaps would be required.
Worst case scenario: Array is backwards (lowest at the end).  This would require every value to be evaluated one-by-one before being placed.

5) Selection Sort
Description: An iteration is made through the array and the lowest value is flagged (this flag is updated as any lower values are found).  Once an iteration is complete, the lowest value is placed at the beginning of the array and the next iteration begins, omitting the value(s) that have already been placed at the beginning.
Base case scenario: Array is in order.  Every value would have to be evaluated, but no swaps would be needed.
Worst case scenario: Array is backwards (lowest at the end).  This would require a swap with each iteration.
