import React from  'react';
import {render,fireEvent,waitFor} from '@testing-library/react-native';
import HomeScreen from '../HomeScreen';

// Mock the react-native-image-picker library
jest.mock('react-native-image-picker', () => ({
    launchCamera: jest.fn((options: any, callback: (response: { assets: { uri: string }[] }) => void) =>
      callback({
        assets: [{ uri: 'mock-image-uri' }], // Simulating an image URI as the result of picking an image.
      })
    ),
  }));

jest.mock('axios',() =>({
    post : jest.fn(() => {
        Promise.resolve({
            data: {analysis:{message : 'Mock analysis result'}},
        });
    })
}));

describe('HomeScreen', () => {
    it('renders correctly', () => {
      const { getByText, getByPlaceholderText } = render(
        <HomeScreen navigation={{ navigate: jest.fn() }} />
      );
  
      // Assertions for UI elements
      expect(getByText('Pick an image')).toBeTruthy();
      expect(getByPlaceholderText('Enter your question')).toBeTruthy();
      expect(getByPlaceholderText('Enter product category (grocery, skincare, etc.)')).toBeTruthy();
    });
  
    it('handles image picking', async () => {
      const { getByText } = render(<HomeScreen navigation={{ navigate: jest.fn() }} />);
      const pickImageButton = getByText('Pick an image');
  
      fireEvent.press(pickImageButton); // Simulate pressing the 'Pick an image' button.
  
      await waitFor(() => {
        const imagePreview = getByText('mock-image-uri'); // Expect the mocked image URI to be displayed.
        expect(imagePreview).toBeTruthy();
      });
    });
  
    it('handles product analysis', async () => {
      const { getByText, getByPlaceholderText } = render(
        <HomeScreen navigation={{ navigate: jest.fn() }} />
      );
  
      // Simulate user input for the question and product category.
      fireEvent.changeText(getByPlaceholderText('Enter your question'), 'Is this product safe?');
      fireEvent.changeText(
        getByPlaceholderText('Enter product category (grocery, skincare, etc.)'),
        'skincare'
      );
  
      const analyzeButton = getByText('Analyze Product'); // Locate the 'Analyze Product' button.
      fireEvent.press(analyzeButton); // Simulate pressing it.
  
      await waitFor(() => {
        const result = getByText(/Mock analysis result/); // Expect the mock API response to be displayed.
        expect(result).toBeTruthy();
      });
    });
  });
  