function LazyMan(name, logFn) {
  const tasks = [];

  function next() {
    const task = tasks.shift();
    if (task) task();
  }

  tasks.push(() => {
    logFn(`%cHi, I'm ${name}.`, "color: green; font-weight: bold;");
    next();
  });

  setTimeout(next, 0);

  const obj = {
    eat(food) {
      tasks.push(() => {
        logFn(`%cEat ${food}.`, "color: orange; font-weight: bold;");
        next();
      });
      return obj;
    },

    sleep(seconds) {
      tasks.push(() => {
        logFn(
          `%cSleeping for ${seconds} seconds...`,
          "color: blue; font-style: italic;"
        );
        setTimeout(() => {
          logFn(
            `%cWake up after ${seconds} seconds.`,
            "color: blue; font-weight: bold;"
          );
          next();
        }, seconds * 1000);
      });
      return obj;
    },

    sleepFirst(seconds) {
      tasks.unshift(() => {
        logFn(
          `%cSleeping first for ${seconds} seconds...`,
          "color: red; font-style: italic;"
        );
        setTimeout(() => {
          logFn(
            `%cWake up after ${seconds} seconds.`,
            "color: red; font-weight: bold;"
          );
          next();
        }, seconds * 1000);
      });
      return obj;
    },
  };

  return obj;
}

// Run the animation demo
LazyMan("Jack", console.log).eat("banana").sleepFirst(5).eat("apple").sleep(2);
