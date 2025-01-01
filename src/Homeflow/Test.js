import React, { useState, useCallback } from 'react';
import { View, Button, Text } from 'react-native';

const Counter = React.memo(({ onIncrement }) => {
    console.log('Counter rendered');
    return <Button title="Increment" onPress={onIncrement} />;
});

const Test = () => {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount((prevCount) => prevCount + 1);
    }, []); // Memoize the function

    return (
        <View>
            <Text style={{ color: 'white' }}>Count: {count}</Text>
            <Counter onIncrement={increment} />
        </View>
    );
};

export default Test;
