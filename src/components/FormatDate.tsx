import { Dayjs } from 'dayjs';

const formatDate = (date: Dayjs) => {
    return date.format('DD/MM/YYYY');
}

export default formatDate;