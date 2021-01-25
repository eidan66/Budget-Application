import React from 'react';
import { BrowserRouter, Route, Switch, RouteComponentProps } from 'react-router-dom';
import routes from '../../../config/routes';
import { Navbar, UserPayment } from '../../../components/organisms';

import type { CurrencyCode } from '../../../../node_modules/currency-code-symbol-map/lib/currencyCodeSymbolMapping';

import { PaymentContext } from '../../../contexts/payment/paymentContext';
import { UserContext } from '../../../contexts/user/userContext';

import * as S from './style';

interface IHomepageProps {
  first_name: string;
  last_name: string;
  email: string;
  avatar: string;
}

const Homepage: React.FC = () => {
  const { userDetails } = React.useContext(UserContext);
  const { paymentDetails } = React.useContext(PaymentContext);

  return (
    <S.HomepageWrapper>
      <BrowserRouter>
        <S.NavbarWrapper>
          <Navbar
            currentBalance={userDetails[0].current_balance}
            userCurrency={userDetails[0].current_balance_currency as CurrencyCode}
          />
        </S.NavbarWrapper>
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
