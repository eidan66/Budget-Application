/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext } from 'react';
import { Transactions } from '../../views/pages';
import { CategoriesContext } from '../../contexts/categories/categoriesContext';
import { Loader, Typography } from '../../components/atoms';
import { useLocation } from 'react-router-dom';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import useLocalStorage from '../../hooks/useLocalStorage';

import * as S from './style';

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

const TransactionsContainer: React.FC = () => {
  const location = useLocation();
  const { categories } = useContext(CategoriesContext);
  let categoryName;
  if (location.state) {
    categoryName = location.state.category;
  } else {
    categoryName = categories[0].name;
  }
  const [selectedCategory, setSelectedCategory] = useLocalStorage('selectedCategory', categoryName);

  const [state, setState] = React.useState<{ category: string | number; name: string }>({
    category: categoryName,
    name: 'hai',
  });

  const [isLoading, setLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3700);
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }, [isLoading === true]);

  const handleChange = (event: React.ChangeEvent<{ name?: string; value: string }>) => {
    const name = event.target.name as keyof typeof state;
    setState({
      ...state,
      [name]: event.target.value,
    });
    setSelectedCategory(event.target.value);
    setLoading(true);
  };
  const classes = useStyles();

  const renderOptions = () => {
    return categories.map((item) => {
      return (
        <option value={item.name} key={item.name}>
          {item.name}
        </option>
      );
    });
  };

  return (
    <S.TransactionContainerWrapper>
      <S.TitleWrapper>
        <Typography.MediumText color="primary">Transactions</Typography.MediumText>
      </S.TitleWrapper>
      <S.FilterWrapper>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="currency-placeholder">Category Filter</InputLabel>
          <NativeSelect
            value={state.category}
            onChange={handleChange}
            inputProps={{
              name: 'category',
              id: 'category-placeholder',
            }}
          >
            {renderOptions()}
          </NativeSelect>
        </FormControl>
      </S.FilterWrapper>
      {isLoading ? (
        <S.LoaderWrapper>
          <Loader.Card />
        </S.LoaderWrapper>
      ) : (
        <S.TransactionWrapper>
          <Transactions category={state.category.toString()} />
        </S.TransactionWrapper>
      )}
    </S.TransactionContainerWrapper>
  );
};

export default TransactionsContainer;
