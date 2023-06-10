export default function Header() {
    return (
    <div className="fixed top-5">
            <div className="flex flex-row items-center bg-black bg-opacity-50 p-3 rounded-xl">
                <h1 className="text-5xl mr-5 inline-block">Pomo.io</h1>
                <h1 className="text-2xl ml-10 underline hover:text-blue-300 transition-all 150ms ease-out"><a href="https://en.wikipedia.org/wiki/Pomodoro_Technique" target="_blank">What Is Pomodoro?</a></h1>
                <h1 className="text-2xl ml-5  underline hover:text-blue-300 transition-all 150ms ease-out"><a href="mailto:dany@dpalma.dev?subject=Pomo.io Feedback">Feedback</a></h1>
            </div>
    </div>
    )
  }