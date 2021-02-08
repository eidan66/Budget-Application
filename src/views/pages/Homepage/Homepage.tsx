import React from 'react';
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';
import routes from '../../../config/routes';
import { Navbar, UserPayment } from '../../../components/organisms';

import type { CurrencyCode } from '../../../../node_modules/currency-code-symbol-map/lib/currencyCodeSymbolMapping';

import { UserContext } from '../../../contexts/user/userContext';
import { AppContext } from '../../../contexts/app/appContext';

import useLocalStorage from './../../../hooks/useLocalStorage';
import * as S from './style';

const Homepage: React.FC = () => {
  const [currencyList, setCurrencyList] = useLocalStorage('currencyList', []);

  const { userDetails } = React.useContext(UserContext);
  const { currency } = React.useContext(AppContext);

  const currencyChecker = (paymentCurrency: string, paymentAmount: string) => {
    let rate = 1;
    Object.keys(currencyList).map((item) => {
      if (item === paymentCurrency) {
        rate = currencyList[item] * parseInt(paymentAmount);
      }
    });

    return rate.toFixed(0);
  };

  return (
    <S.HomepageWrapper>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <S.NavbarWrapper>
          <Navbar
            currentBalance={currencyChecker(currency, userDetails[0].current_balance).toString()}
            userCurrency={currency as CurrencyCode}
          />
        </S.NavbarWrapper>
        <S.RouterWrapper>
          <Switch>
            {routes.map((route, index) => {
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  render={(props: RouteComponentProps<any>) => (
                    <route.component name={route.name} {...props} {...route.props} />
                  )}
                />
              );
            })}
          </Switch>
        </S.RouterWrapper>
        <S.PaymentWrapper>
          <UserPayment
            email={userDetails[0].email}
            avatar={userDetails[0].avatar}
            first_name={userDetails[0].first_name}
            last_name={userDetails[0].last_name}
          />
        </S.PaymentWrapper>
      </BrowserRouter>
    </S.HomepageWrapper>
  );
};

export default Homepage;

/* 


*/
