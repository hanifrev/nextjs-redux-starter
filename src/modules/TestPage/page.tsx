'use client';

import { useGetTheUsersQuery } from '@/services/api';
import React from 'react';

const TestPage = () => {
  const { data, isLoading } = useGetTheUsersQuery('');
  console.log(data);

  return <div>{isLoading && 'LOADING....'}</div>;
};

export default TestPage;
