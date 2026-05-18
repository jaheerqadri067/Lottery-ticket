import { useState } from "react"
import { helper, sum } from './helper'

export default function Lottery() {
    const [ticket, setTicket] = useState(helper(3));
    let isWinning = sum(ticket) === 15;

    return (
        <div className="text-center w-md m-auto mt-20">
            <h2>Lottery Ticket</h2>
            <div className="border-2 border-pink-400 mt-2 text-2xl flex gap-0.5 justify-center">
                <span>{ticket[0]}</span>
                <span>{ticket[1]}</span>
                <span>{ticket[2]}</span>
            </div>
            <h3 className="text-black text-2xl">
                {isWinning && "congratulations you won the lottery of 1Cr"}
            </h3>
        </div>
    )
}