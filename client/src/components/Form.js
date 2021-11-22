import '../App.css';
import './Form.css';

const Form = () => {
    return(
        <div className="App">
            <h3>CREATE NEW SUB-AGENT</h3>
            <div className="Information">
            <form>
                <p>
                    <label>Account Username:</label>
                    <input type="text"/>
                </p>
                <p>
                    <label>Password*:</label>
                    <input type="text"/>
                </p>
                <p>
                    <label>Confirm Password*:</label>
                    <input type="text"/>
                </p>
                <br/>
                <p>
                    <label>Sub-Agent Name*:</label>
                    <input type="text"/>
                </p>
                <br/>
                <p>
                    <label>Contact Number:</label>
                    <input type="number"/>
                </p>
            </form>
            </div>
        </div>
    )
}

export default Form;