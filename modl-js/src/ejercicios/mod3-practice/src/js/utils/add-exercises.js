// const numExercises = 20;

// for (let i = 1; i <= numExercises; i++) {
//   let script = document.createElement("script");
//   script.setAttribute("src", `js/exercises/exercise-${i}.js`);
//   document.body.appendChild(script);
// }
// se puede hacer anomima autollamada
const addExercises = async () => {
  const numExercises = 20;

  for (let i = 1; i <= numExercises; i++) {
    const script = document.createElement("script");
    script.setAttribute("src", `js/exercises/exercise-${i}.js`);

    const scriptLoaded = new Promise((resolve, reject) => {
      script.onload = resolve;
      script.onerror = reject;
    });

    document.body.appendChild(script);

    await scriptLoaded;
  }
}

addExercises();