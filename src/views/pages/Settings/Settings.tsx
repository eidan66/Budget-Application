/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import useLocalStorage from './../../../hooks/useLocalStorage';
import { AppContext } from '../../../contexts/app/appContext';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    selectEmpty: {
      marginTop: theme.spacing(2),
    },
  })
);

const Settings: React.FC = (): JSX.Element => {
  const { currency, setCurrency } = React.useContext(AppContext);

  const [currencyList, setCurrencyList] = useLocalStorage('currencyList', []);

  const [state, setState] = React.useState<{ currency: string | number; name: string }>({
    currency: currency,
    name: 'hai',
  });

  const handleChange = (event: React.ChangeEvent<{ name?: string; value: string }>) => {
    const name = event.target.name as keyof typeof state;
    setState({
      ...state,
      [name]: event.target.value,
    });
    setCurrency(event.target.value);
  };
  const classes = useStyles();

  const renderOptions = () => {
    return Object.keys(currencyList).map((item) => {
      return (
        <option value={item} key={item}>
          {item}
        </option>
      );
    });
  };

  return (
    <FormControl className={classes.formControl}>
      <InputLabel shrink htmlFor="currency-placeholder">
        Currency
      </InputLabel>
      <NativeSelect
        value={state.currency}
        onChange={handleChange}
        inputProps={{
          name: 'currency',
          id: 'currency-placeholder',
        }}
      >
        {renderOptions()}
      </NativeSelect>
    </FormControl>
  );
};

export default Settings;
