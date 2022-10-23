import { useState } from 'react';

function InputHandler(props) {

    // const handleSubmit = (event) => {

    // }

    function returnTarget() {
        return props.target;
    }

    return (
        <>
          <form>
            <label>Input a target phrase:
              <input
                type="text" 
                />
            </label>
            <button type='button' onSubmit={returnTarget}>Start Algorithm</button>
          </form>
        </>
      )
}

export default InputHandler;