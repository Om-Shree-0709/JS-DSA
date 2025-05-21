function LazyMan(name, logFn) {
  const tasks = []; // Queue to store all actions in order

  // Function to execute the next task in the queue
  function next() {
    const task = tasks.shift(); // Remove and get the first task
    if (task) task(); // Execute the task if it exists
  }

  // First task: Print the greeting message
  tasks.push(() => {
    logFn(`Hi, I'm ${name}.`);
    next(); // Move to the next task in the queue
  });

  // Start executing tasks asynchronously, ensuring all methods are added before execution
  setTimeout(next, 0);

  // Create an object to store chainable methods
  const obj = {
    /**
     * eat(food)
     * - Logs "Eat food."
     * - Adds the action to the queue.
     * - Calls `next()` to proceed after logging.
     * - Returns `obj` to allow chaining.
     */
    eat(food) {
      tasks.push(() => {
        logFn(`Eat ${food}.`);
        next(); // Move to the next task
      });
      return obj; // Enable method chaining
    },

    /**
     * sleep(seconds)
     * - Waits for the given seconds before continuing.
     * - Uses `setTimeout` to create a delay.
     * - Logs "Wake up after X seconds."
     * - Calls `next()` to proceed after sleeping.
     */
    sleep(seconds) {
      tasks.push(() => {
        setTimeout(() => {
          logFn(
            `Wake up after ${seconds} ${seconds > 1 ? "seconds" : "second"}.`
          );
          next(); // Move to the next task
        }, seconds * 1000); // Convert seconds to milliseconds
      });
      return obj;
    },

    /**
     * sleepFirst(seconds)
     * - Same as `sleep()`, but this runs **before everything else**.
     * - Instead of `push()`, it uses `unshift()` to add the task at the front of the queue.
     * - Ensures it executes first, even before the greeting message.
     */
    sleepFirst(seconds) {
      tasks.unshift(() => {
        setTimeout(() => {
          logFn(
            `Wake up after ${seconds} ${seconds > 1 ? "seconds" : "second"}.`
          );
          next(); // Move to the next task
        }, seconds * 1000);
      });
      return obj;
    },
  };

  return obj; // Return the object to allow method chaining
}

LazyMan("Jack", console.log).eat("banana").sleepFirst(10).eat("apple").sleep(1);
