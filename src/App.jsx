import { FlipWords } from "./components/acernity-ui/FlipWords";

function App() {
  const words = ["handsome", "cute", "kind", "awesome!"];
  return (
    <>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className="h-screen flex justify-center items-center px-4">
          <div className="text-4xl mx-auto font-semibold text-white dark:text-neutral-400">
            Kaarlo Sasiang is
            <FlipWords
              words={words}
              className={"transition-all duration-300 ease-out text-[#5bcae2]"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
