import React, {useState} from 'react';
import styles from './Counter.module.scss'

const Counter = () => {
    const [count, setCount] = useState<number>(0)


    return (<div>
            <h2>{count}</h2>
            <button className={styles.button} onClick={() => setCount(prevState => prevState + 1)}>Increment</button>
        </div>);
};

export default Counter;

