import React from 'react'

function SeatWiseBreakup(props) {

    return (
        <div className="seatWiseBreakup">
            <table>
                <colgroup>
                    <col width="30%" />
                    <col width="20%" />
                    <col width="25%" />
                    <col width="25%" />
                </colgroup>
                <thead>
                    <tr>
                        <td className="brd-bottom">Type</td>
                        <td className="brd-bottom">Seats</td>
                        <td className="brd-bottom">Gross Amt</td>
                        <td className="brd-bottom">Net Amt</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Confirm</td>
                        <td>05</td>
                        <td>1250</td>
                        <td>1250</td>
                    </tr>
                    <tr>
                        <td>Agent Online</td>
                        <td>10</td>
                        <td>1250</td>
                        <td>1250</td>
                    </tr>
                    <tr>
                        <td>Agent Offline</td>
                        <td>02</td>
                        <td>1250</td>
                        <td>1250</td>
                    </tr>
                    <tr>
                        <td>Branch</td>
                        <td>04</td>
                        <td>1250</td>
                        <td>1250</td>
                    </tr>
                    <tr>
                        <td className="brd-bottom">Guest</td>
                        <td className="brd-bottom">01</td>
                        <td className="brd-bottom">1250</td>
                        <td className="brd-bottom">1250</td>
                    </tr>
                    <tr>
                        <td colSpan={4} className="txt-bold">Available Seats: 08</td>
                    </tr>
                </tbody>
                <tfoot></tfoot>
            </table>
        </div>
    )
}

export default SeatWiseBreakup