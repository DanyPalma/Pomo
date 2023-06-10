'use client';
import Image from 'next/image';
import restart from '../assets/restart.png';

export default function Timer() {

    var curTimer = "";

    const setStyles = (pomoClass:string , shortClass:string , longClass:string ) => {
        const pomo = document.getElementById("pomodoro");
        const short = document.getElementById("short");
        const long = document.getElementById("long");
        if (short && long && pomo) {
          pomo.className = pomoClass;
          short.className = shortClass;
          long.className = longClass;
        }
      };
      
    const setTimes = (timerLength:string) => {
        if(timerLength == 'pomoTime'){
            const timer = document.getElementById("countDown");
            if(timer)
                timer.innerText = "25:00";
        }
        if(timerLength == 'shortTime'){
            const timer = document.getElementById("countDown");
            if(timer)
                timer.innerText = "5:00";
        }
        if(timerLength == 'longTime'){
            const timer = document.getElementById("countDown");
            if(timer)
                timer.innerText = "10:00";
        }
    }
      const pomoTime = () => {
        setStyles('bg-white text-black', 'hover:text-black hover:bg-white transition-all duration-300 ease-in-out', 'hover:text-black hover:bg-white transition-all duration-300 ease-in-out');
        setTimes('pomoTime');
        curTimer = "pomoTime"
        if(flag === 1)
            startStop();
    };
      
      const shortTime = () => {
        setStyles('hover:text-black hover:bg-white transition-all duration-300 ease-in-out', 'bg-white text-black', 'hover:text-black hover:bg-white transition-all duration-300 ease-in-out');
        setTimes('shortTime');
        curTimer = "shortTime"
        if(flag === 1)
            startStop();
    };
      
      const longTime = () => {
        setStyles('hover:text-black hover:bg-white transition-all duration-300 ease-in-out', 'hover:text-black hover:bg-white transition-all duration-300 ease-in-out', 'bg-white text-black');
        setTimes('longTime');
        if(flag === 1)
            startStop();
        curTimer = "longTime"
    };

    var flag = 0;
    let intervalRef: NodeJS.Timeout | null = null;

    const startStop = () => {
        const button = document.getElementById("start");
        const timer = document.getElementById("countDown");

        if(timer && button && flag === 0)
        {
            flag = 1;
            button.style.color = 'black';
            button.style.backgroundColor='white';
            button.innerText = 'Stop';
            // start the countdown timer
            const timeParts = timer.innerText.split(":");
            if(timeParts.length === 2)
            var minutes = parseInt(timeParts[0]);
            var seconds = parseInt(timeParts[1]);
            intervalRef = setInterval(function () {
                if(minutes === 0 && seconds === 0)
                {
                    notifyMe();
                    clearInterval(intervalRef);
                    intervalRef = null;
                    restartFn();
                }
                else if(seconds === 0) {
                    seconds = 60;
                    minutes--;
                }
                else if(seconds < 10) 
                {
                    timer.innerText = minutes + ":" + "0" + seconds
                } else {
                    timer.innerText = minutes + ":" + seconds
                }
                seconds--;
            }, 1000)
        }
        else if(button && flag === 1)
        {
            flag = 0;
            button.style.color = 'white';
            button.style.backgroundColor='transparent';
            button.innerText = 'Start';
            // stop the countdown timer
            if(intervalRef) {
                clearInterval(intervalRef);
                intervalRef = null;
            }
        }
    }

    const restartFn = () => {
        
        if(flag === 1){
            startStop();
        }
        setTimes(curTimer);

    }

    function notifyMe() {
        if (Notification.permission !== 'granted')
         Notification.requestPermission();
        else {
         var notification = new Notification('Pomo.io', {
          icon: '',
          body: 'Timer is over!',
         });
         notification.onclick = function() {
          window.open('http://stackoverflow.com/a/13328397/1269037');
         };
        }
       }

    return (
    <div className="flex flex-col bg-black bg-opacity-50 p-10 items-center rounded-2xl">
        <div className="flex flex-row gap-5 text-xl [&>button]:outline [&>button]:outline-1 [&>button]:outline-white [&>button]:p-2 [&>button]:rounded-xl">
            <button onClick={pomoTime} id="pomodoro" className="hover:text-black hover:bg-white transition-all duration-300 ease-in-out ">Pomodoro</button>
            <button onClick={shortTime} id="short" className="hover:text-black hover:bg-white transition-all duration-300 ease-in-out ">Short Break</button>
            <button onClick={longTime} id="long" className="hover:text-black hover:bg-white transition-all duration-300 ease-in-out ">Long Break</button>
        </div>
        <div className="text-9xl pt-5">
            <h1 id="countDown">Timer</h1>
        </div>
        <div className="flex flex-row items-center gap-10">
            <button onClick={startStop}id="start"className='text-xl cursor-pointer outline outline-1 outline-white p-3 rounded-xl transition-all duration-300 ease-in-out'>Start</button>
            <button><Image 
            onClick={restartFn}
            src={restart}
            height="50"
            alt="Restart Button"
            className='hover:rotate-[360deg] transition-all duration-500 ease-in-out cursor-pointer'
            /> </button>
        </div>
    </div>
    )
  }