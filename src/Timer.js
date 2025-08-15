import React, { useState, useEffect, useRef } from 'react';

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const intervalRef = useRef(null); // Используем useRef для хранения ID интервала

  useEffect(() => {
    if (isRunning) {
      intervalRef.current = setInterval(() => {
        setSeconds((prevSeconds) => prevSeconds + 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current); // Останавливаем интервал
    }

    return () => {
      clearInterval(intervalRef.current); // Очистка интервала при размонтировании
    };
  }, [isRunning]);

  const startStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    clearInterval(intervalRef.current); // Останавливаем интервал перед сбросом
    setSeconds(0);
    setIsRunning(false);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', border: '1px solid #ccc' }}>
      <h2>Секундомер: {seconds} сек.</h2>
      <button onClick={startStop}>{isRunning ? 'Стоп' : 'Старт'}</button>
      <button onClick={reset}>Сброс</button>
    </div>
  );
};

export default Timer;
