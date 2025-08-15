import React, { useState, useEffect, useRef } from 'react';
import './Timer.css';

const Timer = ({ duration = 60, onComplete, warningThreshold = 10 }) => {
    const [currentTime, setCurrentTime] = useState(new Date());
    const [remainingTime, setRemainingTime] = useState(duration);
    const [isComplete, setIsComplete] = useState(false);
    const intervalRef = useRef(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isComplete || isPaused) {
            return;
        }

        intervalRef.current = setInterval(() => {
            setCurrentTime(new Date());
            setRemainingTime((prevTime) => {
                const newTime = prevTime - 1;
                if (newTime <= 0) {
                    clearInterval(intervalRef.current);
                    setIsComplete(true);
                    if (onComplete) {
                        onComplete();
                    }
                    return 0;
                } else {
                    return newTime;
                }
            });
        }, 1000);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, [isComplete, onComplete, isPaused]);

    const formattedTime = currentTime.toLocaleTimeString();

    const togglePause = () => {
        setIsPaused(!isPaused);
    };

    const resetTimer = () => {
        clearInterval(intervalRef.current);
        setIsComplete(false);
        setIsPaused(false);
        setRemainingTime(duration);
    };

    const progress = ((duration - remainingTime) / duration) * 100; // Вычисляем прогресс в процентах

    return (
        <div className="timer-container">
            <h2 className="timer-heading">Текущее время: {formattedTime}</h2>
            {isComplete ? (
                <h2 className="timer-expired timer-heading">Время истекло!</h2>
            ) : (
                <>
                    <div className="timer-progress-bar-container">
                        <div
                            className="timer-progress-bar"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                    <p
                        className={`timer-time ${remainingTime <= warningThreshold ? 'timer-warning' : ''
                            }`}
                    >
                        Осталось: {remainingTime} сек.
                    </p>
                    <div className="timer-controls">
                        <button className="timer-button" onClick={togglePause}>
                            {isPaused ? 'Продолжить' : 'Пауза'}
                        </button>
                        <button className="timer-button" onClick={resetTimer}>
                            Сброс
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Timer;
