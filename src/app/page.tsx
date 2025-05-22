export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <h1 className="text-3xl font-bold animate-spin">
       moooo.dev
      </h1>
      <main className="flex flex-col gap-[32px] row-start-2 items-center justify-items-center sm:items-start">
        <p>
          Welcome to moooo.dev, where you can milk my fucking cock!
        </p>

        <div className="mt-[10px]">
          <h1 className="text-xl font-bold ">todo list:</h1>
          <ul className="list-disc pl-5 space-y-2">
            <li>Learn Javascript</li>
            <li>Learn React</li>
            <li>Learn Next.js</li>
          </ul>
          <br></br>
          <a href="https://github.com/deepakkumar55/ULTIMATE-JAVASCRIPT-PROJECT/tree/main">deepakkumar55/ULTIMATE-JAVASCRIPT-PROJECT</a><br></br>
          <a href="/javascriptprojects">Projects for learning Javascript</a>
        </div>
      </main>
    </div>
  );
}
