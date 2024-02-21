import dayjs, { ConfigType } from 'dayjs';

const formatDate = (date: ConfigType) => {
  return dayjs(date).format('MM/DD/YYYY');
};

export default formatDate;
