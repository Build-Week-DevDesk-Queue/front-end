import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";
import TicketCard from "../Ticket/TicketCard";

export default function MyTickets(props) {
    const [myTickets, setMyTickets] = useState([]);

    useEffect(() => {
        axiosWithAuth().get("https://lambda-dev-desk-queue.herokuapp.com/tickets/myTickets")
            .then(res => {
                debugger
            })
            .catch(err => {
                debugger
            })
    }, []);

    return (
        <div className="myTickets">
            {/* {myTickets.map(ticket => (
                
            ))} */}
        </div>
    )
}