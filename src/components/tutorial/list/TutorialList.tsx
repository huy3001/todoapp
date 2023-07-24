import React from 'react';
import Title from 'components/Title';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import styles from './TutorialList.module.scss';

const TutorialList = () => {
  return (
    <div className="TutorialList">
      <Title text="Tutorial List" />
      <Button
        variant="outlined"
        color="primary"
        startIcon={<AddIcon />}
      >
        <Link
          to={'/add'}
          className={styles.link}
        >
          Add Tutorial
        </Link>
      </Button>
    </div>
  );
};

export default TutorialList;
