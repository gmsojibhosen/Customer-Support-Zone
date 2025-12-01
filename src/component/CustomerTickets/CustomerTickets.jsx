import React, { use } from 'react';
import Tickets from '../Tickets/Tickets';

const CustomerTickets = ({customerTickets}) => {
    const tickets= use(customerTickets)
    return (
        <div>
            {
                tickets.map(ticket => <Tickets ticket = {ticket}></Tickets>)
            }
        </div>
    );
};

export default CustomerTickets;