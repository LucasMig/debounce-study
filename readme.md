# Debounce study

Hello there!

This is a simple study on the debounce concept / technique. It basically simulates a situation where multiple events triggering a function over and over end up not working as expected.

I found out about this concept while reviewing some code at my job (as of december of 2022), where inside a react component I came across the following line inside a component:

    const debouncedQuantity = useDebounce(newQuantity, 250);

Realizing that it was a custom hook, I had two things to do: first, find out what the word "debounce" meant and, second, check out the custom hook to understand what it was created for.
