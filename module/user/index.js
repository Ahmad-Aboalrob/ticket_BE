import emp from './employee.router.js';
import ticket from './ticket.route.js';

const apiRouter = (dep) => {
    const router = dep.Router();
    const Employee = emp(dep);
    const Ticket = ticket(dep);
    router.use('/employee', Employee);
    router.use('/ticket',Ticket);

    return router;

}
export default apiRouter;