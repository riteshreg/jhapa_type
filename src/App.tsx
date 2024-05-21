import useAppHook from "./hooks/apphook";

function App() {

  const {
    nepaliWords
  } = useAppHook();

  return (
    <div className="bg-primaryColor min-h-full flex flex-col">
      <h1>Welcome to Jhapa Type</h1>
      <div className="mx-10">in Np: {nepaliWords}</div>
    </div>
  );
}

export default App;
