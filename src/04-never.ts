const withoutEnd = () => {
  while(true){
    console.log('Hello world');
  }
};
const fail = (message: string) => {
  throw new Error(message);
}
