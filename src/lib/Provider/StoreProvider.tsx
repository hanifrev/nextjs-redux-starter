'use client';

import React, { PropsWithChildren } from 'react';

import { store } from '../store';

import { Provider } from 'react-redux';

const StoreProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default StoreProvider;
