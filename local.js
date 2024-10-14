const hello = window.localStorage.getItem("hello");
console.log(hello);

const setAge = () => {
  localStorage.setItem("age", 31);
};
