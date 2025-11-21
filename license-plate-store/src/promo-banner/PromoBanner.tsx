import {useEffect, useState} from 'react';

const SECS_IN_DAY = 24 * 60 * 60;
const SECS_IN_HOUR = 60 * 60;


export function PromoBanner() {

    // Promo is on for 24 hours initially
    const [timeLeft, setTimeLeft] = useState(SECS_IN_DAY);
    const [saleOver, setSaleOver] = useState(false);

    useEffect(() => {
        const id = setInterval(() => {
            setTimeLeft(time => {
                const newTime = time - 1;
                if (newTime <= 0) {
                    setSaleOver(true);
                    clearInterval(id);
                }
                return newTime;
            });
        }, 1000);
        return () => clearInterval(id);
    }, []);

    if (saleOver) return null;

    return (
        <div className="alert alert-warning" role="alert">
            Our promo sale is ON for the next {toHourMinSec(timeLeft)}
        </div>
    );
}

function toHourMinSec(durationInSec: number): string {
   const hours = Math.trunc(durationInSec / SECS_IN_HOUR);
   const minutes = Math.trunc((durationInSec % SECS_IN_HOUR) / 60);
   const seconds = durationInSec - (hours * SECS_IN_HOUR) - (minutes * 60);
   return `${zeroPad(hours)}h ${zeroPad(minutes)}m ${zeroPad(seconds)}s`;
}

function zeroPad(num: number): string {
    return ('0' + num).slice(-2);
}
