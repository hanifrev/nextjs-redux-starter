'use client';

import { Button } from '@/common/components/Button';
import { useGetTheUsersQuery } from '@/services/api';
import React from 'react';

const ExampleClientComponent = () => {
  const { data, isLoading, isError } = useGetTheUsersQuery('');
  console.log(data);

  return (
    <div className="flex flex-col gap-4">
      {isLoading && 'LOADING....'}
      {isError && 'Error'}
      <Button
        size="medium"
        variant="primary"
        color="primary"
        // icon={<AddCircle />}
        //  iconRight
        onClick={() => console.log('Button Clicked')}
        text="Medium"
      />
    </div>
  );
};

export default ExampleClientComponent;
