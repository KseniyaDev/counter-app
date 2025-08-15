import React from 'react';
import Counter from './Counter';
import Timer from './Timer';
import './App.css';

function App() {
    const handleTimerComplete = () => {
        alert('Таймер завершен!');
    };

    return (
        <div className="App">
            <header className="App-header">
                <h1>Пример счетчика</h1>
                <Counter /> {/* Счетчик здесь! */}
                <Timer duration={30} onComplete={handleTimerComplete} warningThreshold={5} />
            </header>
        </div>
    );
}

export default App;

