
function greetings (name, status) {
  console.log(`Hello, ${name.join(" ")}! Nice to have a ${status["title"]} ${status["occupation"]} around!`);
  }

  console.log(greetings(["John", "Jaboc", "Jingleheimerschmidt"], {title: "Senior", occupation: "Duck-feeder"}));
// console.log(
//   greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
// );
// logs Hello, John Q Doe! Nice to have a Master Plumber around.
