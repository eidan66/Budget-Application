import React from 'react';
import * as S from './style';
//  ************* Backdrop *************   \\
import { Backdrop } from '@material-ui/core';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
//  ************* Backdrop *************   \\
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
    },
  })
);

import { Link } from 'react-router-dom';
const NotFound: React.FC = () => {
  const classes = useStyles();

  return (
    <Backdrop className={classes.backdrop} open={true}>
      <S.NotFoundWrapper>
        <img
          alt="Image for post"
          src="https://miro.medium.com/max/1000/1*-Lv7y_W3qoO1fqsCii7jEA.gif"
          sizes="100vw"
          width="800"
          height="600"
        />

        <S.Link404Wrapper>
          <Link to="/Dashboard">
            <span>Go to Dashboard..</span>
          </Link>
        </S.Link404Wrapper>
      </S.NotFoundWrapper>
    </Backdrop>
  );
};

export default NotFound;
