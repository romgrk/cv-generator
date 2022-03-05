import React, { useState } from 'react';

import { useAppSelector, useAppDispatch } from '../hooks';
import { actions } from '../store/cv';
import styles from './Counter.module.css';

export function Counter() {
  const data = useAppSelector(state => state.cv.data);
  const dispatch = useAppDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  const incrementValue = Number(incrementAmount) || 0;

  return (
    <div>
      <div className={styles.row}>
      </div>
      <div className={styles.row}>
      </div>
    </div>
  );
}
