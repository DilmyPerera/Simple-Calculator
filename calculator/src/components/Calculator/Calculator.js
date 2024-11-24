import {useState} from "react";

export default function Calculator(props){
    const [num1, setNum1] = useState(0);
    const [num2, setnum2] = useState(0);
    return(
        <div>
            <table>
                <tbody>
                    <tr>
                        <td>Enter Number 1: </td>
                        <td>
                            <input type="number" value={num1} 
                            onChange = {(e)=>{setNum1(e.target.value)}}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Enter Number 2 : </td>
                        <td><input type="number" value={num2}
                        onChange = {(e)=>{setnum2(e.target.value)}}/>
                        </td>
                    </tr>
                    <tr>
                        <td>Addition : </td>
                        <td>{Number(num1)+Number(num2)}</td>
                    </tr>
                    <tr>
                        <td>Subtraction</td>
                        <td>{num1-num2}</td>
                    </tr>
                    <tr>
                        <td>Multiplicatoin</td>
                        <td>{num1*num2}</td>
                    </tr>
                    <tr>
                        <td>Division</td>
                        <td>{num1*num2}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}