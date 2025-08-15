import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [count, setCount] = useState(0);
  const [interval, setIntervalValue] = useState(1000); // Начальный интервал - 1 секунда
  const [inputInterval, setInputInterval] = useState(1000); // Для хранения значения из поля ввода

  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, interval);

    return () => clearInterval(timer); // Очистка таймера при размонтировании или изменении interval
  }, [interval]); // Зависимость от interval - таймер перезапускается при изменении interval

  const handleIntervalChange = (event) => {
    setInputInterval(event.target.value);
  };

  const handleSetInterval = () => {
    // Проверка на число и положительное значение
    const newInterval = parseInt(inputInterval, 10);
    if (!isNaN(newInterval) && newInterval > 0) {
      setIntervalValue(newInterval);
    } else {
      alert("Пожалуйста, введите корректное положительное число.");
      setInputInterval(interval); // Возвращаем в поле ввода предыдущий интервал
    }
  };


  return (
    <div>
      <h1>Счетчик: {count}</h1>
      <div>
        <label htmlFor="interval">Интервал (мс):</label>
        <input
          type="number"
          id="interval"
          value={inputInterval}
          onChange={handleIntervalChange}
        />
        <button onClick={handleSetInterval}>Установить интервал</button>
      </div>
    </div>
  );
};

export default Timer;
