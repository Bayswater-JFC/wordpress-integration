import { contactUs } from './html/contactUs';
import { team } from './html/team';
import { teamMatchReport } from './html/teamMatchReport';
import { teams } from './html/teams';

const run = async () => {
  await contactUs();
  await teams();
  await team();
  await teamMatchReport();
};

run();
