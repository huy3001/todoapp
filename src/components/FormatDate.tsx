import { Dayjs } from 'dayjs';

const formatDate = (date: Dayjs) => {
  return date.format('MM/DD/YYYY');
};

export default formatDate;
