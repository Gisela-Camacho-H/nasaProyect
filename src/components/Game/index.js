import React from 'react'


export default function Game() {


	return (
		<>
			<br/>
        <h1>Tic-Tac-Toe Game</h1>
        <br/>
        <table id="ticTacToeTable">
            <tr>
                <td class="col a"></td>
                <td class="col b"></td>
                <td class="col c"></td>
            </tr>
            <tr>
                <td class="col d"></td>
                <td class="col e"></td>
                <td class="col f"></td>
            </tr>
            <tr>
                <td class="g"></td>
                <td class="h"></td>
                <td class="i"></td>
            </tr>
        </table>
        <br/>
        <button class="submit" onClick="reset()">Reset</button>
		</>

	)
}