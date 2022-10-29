import { useState } from 'react';

function LeftColumn () {

    const [target, setTarget] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log({target})
        runAlgorithm();
    }

    const createRandomWord = () => {
        return "random";
    }

    const runAlgorithm = () => {
        setup();
    }

    const setup = () => {
        var initialPopulation = [];
        for (let i = 0; i < target.length; i++) {
            initialPopulation[i] = createRandomWord();
        }
        for (let i = 0; i < target.length; i++) {
            console.log(initialPopulation[i]);
        }
    }
     
    return <div className="left-column">
            <h2>Run Genetic Algorithm</h2>
            <form onSubmit={handleSubmit}>
                <label>Target String:</label>
                <input
                    type="text"
                    required
                    value={target}
                    onChange={(e) => setTarget(e.target.value)}
                />
                <button type='submit'>Start!</button>
            </form>
           </div>;
}

export default LeftColumn;