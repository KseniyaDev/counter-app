import React, { useState } from 'react';

import React, { useState, useEffect } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event) => {
      // Увеличиваем счетчик при нажатии клавиши "вверх" (ArrowUp)
      if (event.key === 'ArrowUp') {
        setCount((prevCount) => prevCount + 1);
      }
      // Уменьшаем счетчик при нажатии клавиши "вниз" (ArrowDown)
      else if (event.key === 'ArrowDown') {
        setCount((prevCount) => prevCount - 1);
      }
    };

    // Добавляем слушатель события keydown на document
    document.addEventListener('keydown', handleKeyDown);

    // Функция очистки: удаляем слушатель события при размонтировании компонента
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []); // Пустой массив зависимостей: эффект выполняется только при монтировании и размонтировании

  return (
    <div>
      <p>Счетчик: {count}</p>
    </div>
  );
};

export default Counter;
