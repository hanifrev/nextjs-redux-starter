import { Button } from '@/common/components/Button';
import {
  decrement,
  increment,
  incrementByAmount,
} from '@/lib/features/counterSlice';
import { RootState } from '@/lib/store';
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const ExampleCounter: React.FC = () => {
  const counter = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementByAmount = (amount: number) => {
    dispatch(incrementByAmount(amount));
  };

  return (
    <div className="flex flex-col mt-7 md:flex-row gap-4 items-center">
      <h1>Counter: {counter}</h1>
      <Button
        color="primary"
        variant="primary"
        size="small"
        text="Increment"
        onClick={handleIncrement}
      />
      <Button
        color="primary"
        variant="primary"
        size="small"
        text="Decrement"
        onClick={handleDecrement}
      />
      <Button
        color="primary"
        variant="primary"
        size="small"
        text="Increment by 5"
        onClick={() => handleIncrementByAmount(5)}
      />
    </div>
  );
};

export default ExampleCounter;
