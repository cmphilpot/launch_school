// const isColorValid = color => color === "blue" || color === "green";

// function isColorValid(color) {
//     return color === "blue" || color === "green";  /// 1
// }

const isColorValid = color => ["blue", "green"].includes(color);

console.log(isColorValid(color));
