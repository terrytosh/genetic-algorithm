import { useState } from 'react';

function LeftColumn () {

    const [target, setTarget] = useState("");

    const handleSubmit = (event) => {
        return <p>{this.target}</p>
    }
     
    return <div className="left-column">
            <form onSubmit={handleSubmit}>
                <label><h2>Input a Target String:</h2>
                <input type="text" value={target} onChange={(e) => setTarget(e.target.value)}/>
                </label>
            </form>
            <input type="submit" />
           </div>;
}

export default LeftColumn;