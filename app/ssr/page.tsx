const page = async () => {
  const result = await fetch("https://jsonplaceholder.typicode.com/posts/1");
  const data = await result.json();
  console.log(data);
  return <div>{data.title}</div>;
};

export default page;
