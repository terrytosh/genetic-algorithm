import InputHandler from './InputHandler';

function LeftColumn () {
     
    return <div className="left-column">
             <InputHandler target=""/>
             <h3>{InputHandler.target}</h3>
           </div>;
}

export default LeftColumn;