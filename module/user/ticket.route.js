import { addTicket,getEmployeeTicket,updateTicket,geAllTickets } from './controller/ticket.js';

const ticketRoute = (dep) => {
    const router = dep.Router();
    router.route('/addTicket').post(addTicket);
    router.route('/getTicketsById').put(getEmployeeTicket);
    router.route('/updatetickets').put(updateTicket);
    router.route('/getTickets').get(geAllTickets);

    return router;
};

export default ticketRoute;
