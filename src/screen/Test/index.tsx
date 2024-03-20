import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import HeaderNavigation from '../../components/HeaderNavigation';
import ButtonView from '../../components/Button';

// Create a context with a default value (0 in this case)
const RenderContext = React.createContext<number>(0);

// Define the prop types for RenderView
interface RenderViewProps {
  count: number;
}

// Function to render a view with a specific count
const RenderView: React.FC<RenderViewProps> = ({count}) => {
  const views = [];
  for (let i = 0; i < count; i++) {
    views.push(<Text key={i}>Item {i}</Text>);
  }
  return <View>{views}</View>;
};

export default function Test() {
  const [loopCount, setLoopCount] = useState<number>(0); // Initial loop count
  const [renderTime, setRenderTime] = useState<number | null>(null); // State to store rendering time

  useEffect(() => {
    // This effect runs after each render
    const endTime = performance.now();
    setRenderTime(endTime);
  }, [loopCount]); // Re-run the effect when loopCount changes

  const handleRenderTest = () => {
    performance.now(); // Start measuring rendering time

    // Increment the loop count
    setLoopCount(prevCount => prevCount + 1000);
  };

  return (
    <View>
      <HeaderNavigation title="Performance Testing" />
      <ButtonView label="Render Test" onPress={handleRenderTest} />
      <ButtonView label="Reset Test" onPress={() => setLoopCount(0)} />

      {renderTime && (
        <Text>
          Render Time:{' '}
          {loopCount &&
            ((renderTime - (performance.now() - loopCount)) / 1000).toFixed(
              5,
            )}{' '}
          seconds
        </Text>
      )}

      <RenderContext.Provider value={loopCount}>
        <Text>Loop Count: {loopCount}</Text>
        <RenderView count={loopCount} />
      </RenderContext.Provider>
    </View>
  );
}
