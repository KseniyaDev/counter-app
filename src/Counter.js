import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [backgroundColor, setBackgroundColor] = useState('lightgray');

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const handleMouseMove = (event) => {
    // Получаем координаты мыши относительно элемента
    const x = event.clientX;
    const y = event.clientY;

    // Генерируем случайные значения для красного, зеленого и синего каналов
    const red = (x % 256);
    const green = (y % 256);
    const blue = ((x + y) % 256);

    // Создаем строку с цветом в формате RGB
    const newColor = `rgb(${red}, ${green}, ${blue})`;

    // Обновляем состояние фона
    setBackgroundColor(newColor);
  };

  return (
    <div
      style={{
        backgroundColor: backgroundColor,
        padding: '20px',
        borderRadius: '5px',
        textAlign: 'center',
        cursor: 'pointer',
      }}
      onMouseMove={handleMouseMove} // Добавляем обработчик движения мыши
    >
      <h2>Счетчик: {count}</h2>
      <button onClick={increment}>Увеличить</button>
      <button onClick={decrement}>Уменьшить</button>
    </div>
  );
};

export default Counter;

