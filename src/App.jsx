import { FlipWords } from "./components/acernity-ui/FlipWords";

function App() {
  const words = ["handsome", "cute", "kind", "awesome!"];
  return (
    <>
      <div className="h-screen flex justify-center items-center px-4">
        <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
          Kaarlo Sasiang is
          <FlipWords
            words={words}
            className={"transition-all duration-100 ease-in-out"}
          />
        </div>
      </div>
    </>
  );
}

export default App;
