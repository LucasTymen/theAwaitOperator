/*
Async Await
The await Operator

In the last exercise, we covered the async keyword. By itself, it doesn’t do
much; async functions are almost always used with the additional keyword await
inside the function body.

The await keyword can only be used inside an async function. await is an
operator: it returns the resolved value of a promise. Since promises resolve in
an indeterminate amount of time, await halts, or pauses, the execution of our
async function until a given promise is resolved.

In most situations, we’re dealing with promises that were returned from
functions. Generally, these functions are through a library, and, in this
lesson, we’ll be providing them. We can await the resolution of the promise it
returns inside an async function. In the example below, myPromise() is a
function that returns a promise which will resolve to the string "I am resolved
now!".
*/

async function asyncFuncExample() {
  let resolvedValue = await myPromise();
  console.log(resolvedValue);
}

asyncFuncExample(); // Prints: I am resolved now!

/*
Within our async function, asyncFuncExample(), we use await to halt our
execution until myPromise() is resolved and assign its resolved value to the
variable resolvedValue. Then we log resolvedValue to the console. We’re able to
handle the logic for a promise in a way that reads like synchronous code.
Instructions
1.

In the provided code, we’ve required in the function brainstormDinner(). This
function expects no arguments and returns a new promise with a resolved value of
a string representing a meal. (You can look at the code for this function by
  navigating to the library.js file.)

Look at the nativePromiseDinner() function in app.js. Take a moment to
understand this function and predict its expected outcome. In the next step,
you’ll be recreating its functionality using async...await rather than native
promises.

It’s not necessary to execute the nativePromiseDinner() function, but, if you’d
like to, check out the hint for some guidance. Press “Check Work” when you’re
ready to move on to the next step.
2.

Fill in the body of the announceDinner() function so that it has the same
functionality as nativePromiseDinner(). It should wait for the promise returned
from brainstormDinner() to resolve, and then log a string to the console in the
same format as did nativePromiseDinner(). You’ll need to use the await operator
inside your function.

When you’re ready, check your work to move on to the next step.
3.

At the bottom of app.js, beneath the function declaration, invoke the
announceDinner() function.
4.

In the terminal type node app.js and press enter to execute your code.
*/
