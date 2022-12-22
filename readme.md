# Debounce study

Hello there!

This is a simple study on the debounce concept / technique. It basically simulates a situation where multiple events triggering a function over and over end up not working as expected.

I found out about this concept while reviewing some code at my job (as of december of 2022), where inside a react component I came across the following line inside a component:

    const debouncedQuantity = useDebounce(newQuantity, 250);

Realizing that it was a custom hook, I had two things to do: first, find out what the word "debounce" meant and, second, check out the custom hook to understand what it was created for.

## What is debouncing?

As a non-native english speaker, I threw "debounce", "debouncing", "debounced" and so on into Google Translate. Got nothing. Tried Deepl. Also nothing. Then I decided to resort to blogs and articles, and only then I discovered that Debouncing is a programming technique!

Basically, debouncing is creating a structure in which a function filters user input before triggering the desired action. Improperly debounced user input can cause bad performance, double activations or user frustration.

