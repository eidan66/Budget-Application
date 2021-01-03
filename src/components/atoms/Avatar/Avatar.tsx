import React, { FC } from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import { Avatar as MatAvatar } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  })
);

interface IAvatar {
  avatar: string;
  avatarName: string;
}
const Avatar: FC<IAvatar> = ({ avatarName, avatar }) => {
  const classes = useStyles();

  return <MatAvatar alt={avatarName} src={avatar} className={classes.large}></MatAvatar>;
};

export default Avatar;
