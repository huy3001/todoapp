import React, { FC } from 'react';
import { Dayjs } from 'dayjs';

type TitleProps = {
  text: string;
  day?: Dayjs | any;
};

const Title: FC<TitleProps> = ({ text, day }) => {
  return (
    <div className="TitleWrapper">
      {text && <h1 className="Title">{text}</h1>}
      {day && (
        <h3 className="CurrentDate">
          <span>Today:</span>
          &nbsp;
          <small>{day}</small>
        </h3>
      )}
    </div>
  );
};

export default Title;
