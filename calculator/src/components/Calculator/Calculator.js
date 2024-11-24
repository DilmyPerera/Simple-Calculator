import {useState} from "react";
import '../Calculator/Calculator.css';

export default function Calculator(props){
    const [num1, setNum1] = useState(0);
    const [num2, setnum2] = useState(0);
    return(
        <div className="container">

            <div className="operations">
                <table>
                    <tbody>
                        <tr align="right">
                            <td>Enter Number 1: </td>
                            <td>
                                <input type="number" value={num1} 
                                onChange = {(e)=>{setNum1(e.target.value)}}/>
                            </td>
                        </tr>
                        <tr align="right">
                            <td>Enter Number 2 : </td>
                            <td><input type="number" value={num2}
                            onChange = {(e)=>{setnum2(e.target.value)}}/>
                            </td>
                        </tr>
                        <tr>
                            <td align="right">Addition : </td>
                            <td align="left">{Number(num1)+Number(num2)}</td>
                        </tr>
                        <tr>
                            <td align="right">Subtraction : </td>
                            <td align="left">{num1-num2}</td>
                        </tr>
                        <tr>
                            <td align="right">Multiplicatoin : </td>
                            <td align="left">{num1*num2}</td>
                        </tr>
                        <tr>
                            <td align="right">Division : </td>
                            <td align="left">{num1*num2}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}