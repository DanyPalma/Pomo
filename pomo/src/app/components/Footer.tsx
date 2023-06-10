export default function Footer() {
    return (
    <div className="fixed bottom-5 left-5 flex flex-row">
    <h1 className="text-xl ml-10 underline hover:text-blue-300 transition-all 150ms ease-out"><a href="https://en.wikipedia.org/wiki/Pomodoro_Technique" target="_blank">What Is Pomodoro?</a></h1>
    <h1 className="pr-3 text-xl ml-5  underline hover:text-blue-300 transition-all 150ms ease-out"><a href="mailto:dany@dpalma.dev?subject=Pomo.io Feedback">Feedback</a></h1>
    <h1 className="fixed right-5 text-2xl">Made with &#128151; by <a className="underline hover:text-3xl transition-all 350ms ease-in" href="https://github.com/DanyPalma">Dany</a> </h1>
    </div>
    )
  }