import { signUp, signIn,update ,getEmployeeByID} from './controller/employee.js';
const empRoute = (dep) => {
    const router = dep.Router();

    router.route('/signUp').post(signUp);
    router.route('/signIn').put(signIn);
    router.route('/update').put(update);
    router.route('/getEmployeeByID').put(getEmployeeByID);

    return router;
};

export default empRoute;
