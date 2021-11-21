import '../App.css';

const Form = () => {
    return(
        <div className="App">
            <h3>CREATE NEW SUB-AGENT</h3>
            <div className="Information">
            <div className="RowDiv">
                <label>Account Username *:</label>
                <input type="text"/>
                </div>
                <div className="RowDiv">
                <label>Password *:</label>
                <input type="text"/></div>
                <div className="RowDiv">
                <label>Confirm Password*:</label>
                <input type="text"/></div>
                <br/>
                <div className="RowDiv">
                
                <label>Sub-Agent Name *:</label>
                <input type="text"/></div>
                <br/>
                <div className="RowDiv">
                
                <label>Contact Number:</label>
                <input type="number"/></div>
            </div>
            <br/>
            <label>PTT User Price:</label>
                <input type="number"/>
        </div>
    )
}

export default Form;