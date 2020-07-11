import { Router } from 'express';
import ReportController from '../controller/report';
import auth from '../middleware/userAuth';
import authentication from '../middleware/authenticate';
import { reportValidation } from '../middleware/validation';

const reportRouter = new Router();

reportRouter
.post('/', auth, reportValidation, ReportController.submitReport)
.post('/search',authentication, ReportController.searchReport)
.get('/all', authentication, ReportController.viewReports)

export default reportRouter;