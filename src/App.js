import './App.css';
import React, { useState, useEffect, useRef } from 'react';

function App() {

  const initialItems = [
    { id: 1, name: 'Anurag', email: 'anurag@zepto.com', image: 'https://pbs.twimg.com/profile_images/1455926553322344449/bmfM9nY1_400x400.jpg' },
    { id: 2, name: 'Bingo', email: 'bingo@zepto.com', image: 'https://pbs.twimg.com/profile_images/1455926553322344449/bmfM9nY1_400x400.jpg' },
    { id: 3, name: 'Cadella', email: 'cadella@zepto.com', image: 'https://pbs.twimg.com/profile_images/1455926553322344449/bmfM9nY1_400x400.jpg' },
    { id: 4, name: 'Dilip', email: 'dilip@zepto.com', image: 'https://pbs.twimg.com/profile_images/1455926553322344449/bmfM9nY1_400x400.jpg' },
    { id: 5, name: 'George', email: 'george@zepto.com', image: 'https://pbs.twimg.com/profile_images/1455926553322344449/bmfM9nY1_400x400.jpg' },
    { id: 6, name: 'Finance', email: 'finance@zepto.com', image: 'https://pbs.twimg.com/profile_images/1455926553322344449/bmfM9nY1_400x400.jpg' },
    { id: 7, name: 'Hina', email: 'hina@zepto.com', image: 'https://pbs.twimg.com/profile_images/1455926553322344449/bmfM9nY1_400x400.jpg' },
    { id: 8, name: 'iris', email: 'iris@zepto.com', image: 'https://pbs.twimg.com/profile_images/1455926553322344449/bmfM9nY1_400x400.jpg' },
    { id: 9, name: 'John', email: 'john@zepto.com', image: 'https://pbs.twimg.com/profile_images/1455926553322344449/bmfM9nY1_400x400.jpg' },
    { id: 10, name: 'Kishan', email: 'kishan@zepto.com', image: 'https://pbs.twimg.com/profile_images/1455926553322344449/bmfM9nY1_400x400.jpg' },
    { id: 11, name: 'Lia', email: 'lia@zepto.com', image: 'https://pbs.twimg.com/profile_images/1455926553322344449/bmfM9nY1_400x400.jpg' },
    { id: 12, name: 'Maheh', email: 'maheh@zepto.com', image: 'https://pbs.twimg.com/profile_images/1455926553322344449/bmfM9nY1_400x400.jpg' },
    { id: 13, name: 'Calla', email: 'calla@zepto.com', image: 'https://pbs.twimg.com/profile_images/1455926553322344449/bmfM9nY1_400x400.jpg' },
    { id: 14, name: 'Diip', email: 'diip@zepto.com', image: 'https://pbs.twimg.com/profile_images/1455926553322344449/bmfM9nY1_400x400.jpg' },
    { id: 15, name: 'Gorge', email: 'gorge@zepto.com', image: 'https://pbs.twimg.com/profile_images/1455926553322344449/bmfM9nY1_400x400.jpg' },
    { id: 16, name: 'Fince', email: 'fince@zepto.com', image: 'https://pbs.twimg.com/profile_images/1455926553322344449/bmfM9nY1_400x400.jpg' },
    { id: 17, name: 'Hin', email: 'hin@zepto.com', image: 'https://pbs.twimg.com/profile_images/1455926553322344449/bmfM9nY1_400x400.jpg' },
    { id: 18, name: 'english', email: 'english@zepto.com', image: 'https://pbs.twimg.com/profile_images/1455926553322344449/bmfM9nY1_400x400.jpg' },
    { id: 19, name: 'Krishnan', email: 'krishnan@zepto.com', image: 'https://pbs.twimg.com/profile_images/1455926553322344449/bmfM9nY1_400x400.jpg' },
    { id: 20, name: 'Krish', email: 'krish@zepto.com', image: 'https://pbs.twimg.com/profile_images/1455926553322344449/bmfM9nY1_400x400.jpg' },
    { id: 21, name: 'Ashraya', email: 'ashraya@zepto.com', image: 'https://pbs.twimg.com/profile_images/1455926553322344449/bmfM9nY1_400x400.jpg' },
    { id: 22, name: 'Vinod', email: 'vinod@zepto.com', image: 'https://pbs.twimg.com/profile_images/1455926553322344449/bmfM9nY1_400x400.jpg' },
    { id: 23, name: 'Camallia', email: 'camellia@zepto.com', image: 'https://pbs.twimg.com/profile_images/1455926553322344449/bmfM9nY1_400x400.jpg' },
    { id: 24, name: 'Dipender', email: 'dipender@zepto.com', image: 'https://pbs.twimg.com/profile_images/1455926553322344449/bmfM9nY1_400x400.jpg' },
    { id: 25, name: 'Georgia', email: 'georgia@zepto.com', image: 'https://pbs.twimg.com/profile_images/1455926553322344449/bmfM9nY1_400x400.jpg' },
    { id: 26, name: 'Fello', email: 'fello@zepto.com', image: 'https://pbs.twimg.com/profile_images/1455926553322344449/bmfM9nY1_400x400.jpg' },
    { id: 27, name: 'Gita', email: 'gita@zepto.com', image: 'https://pbs.twimg.com/profile_images/1455926553322344449/bmfM9nY1_400x400.jpg' },
    { id: 28, name: 'irish', email: 'irish@zepto.com', image: 'https://pbs.twimg.com/profile_images/1455926553322344449/bmfM9nY1_400x400.jpg' },
    { id: 29, name: 'Johney', email: 'Johney@zepto.com', image: 'https://pbs.twimg.com/profile_images/1455926553322344449/bmfM9nY1_400x400.jpg' },
    { id: 30, name: 'himesh', email: 'himesh@zepto.com', image: 'https://pbs.twimg.com/profile_images/1455926553322344449/bmfM9nY1_400x400.jpg' },
  ];

    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState('');
    const [availableItems, setAvailableItems] = useState(initialItems);
    const [selectedItems, setSelectedItems] = useState([]);
    const [highlightedChip, setHighlightedChip] = useState(null);
    const [isInputFocused, setIsInputFocused] = useState(false);

  
    useEffect(() => {
      setHighlightedChip(null);
    }, [selectedItems]);
  
    const handleInputChange = (event) => {
      setInputValue(event.target.value);
      setHighlightedChip(null);
    };

    const handleInputFocus = () => {
      setIsInputFocused(true);
    };

    // const handleInputBlur = () => {
    //  
    //   setIsInputFocused(false);
    // };
  
    const handleKeyDown = (event) => {

      if (event.key === 'Backspace' && inputValue === '') {
        if (highlightedChip) {
          removeChip(highlightedChip);
        } else if (selectedItems.length > 0) {
          setHighlightedChip(selectedItems[selectedItems.length - 1]);
        }
      }
    };
  
    const selectItem = (item) => {
      setSelectedItems([...selectedItems, item]);
      setAvailableItems(availableItems.filter(i => i.id !== item.id));
      setInputValue('');
      if (inputRef.current) {
        inputRef.current.value = ''; 
      }
    };
  
    const removeChip = (chip) => {
      setSelectedItems(selectedItems.filter(item => item.id !== chip.id));
      setAvailableItems([...availableItems, chip]);
      setHighlightedChip(null);
    };
  
    const filteredItems = inputValue
    ? availableItems.filter(item =>
        item.name.toLowerCase().includes(inputValue.toLowerCase()) ||
        item.email.toLowerCase().includes(inputValue.toLowerCase())
      )
    : availableItems;

  


  return (
    
      <div className="app">
        <h1>Pick Users</h1>

        <div className='input-div' >
          {selectedItems.map(item => (
            <div key={item.id} className={`selected-chip ${highlightedChip === item ? 'highlighted' : ''}`}>
              <img src={item.image} alt={item.name} className='image' />
              <p className='name'>{item.name}</p>
              <button onClick={() => removeChip(item)} className='cross-button'>X</button>
            </div>
          ))}
          <input 
            ref={inputRef}
            value={inputValue}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={handleInputFocus}
            
            className='input'
            placeholder={selectedItems.length === 0 ? 'Add new user' : ''}
          />
        </div>
        {isInputFocused && (
          <div className='suggestion-div'>
            { filteredItems.length > 0 ?
              filteredItems.map(item => (
                <div key={item.id} onClick={() => selectItem(item)} className='chip'>
                  <img src={item.image} alt={item.name} className='image' />
                  <p className='name'>{item.name}</p>
                  <p className='email'>{item.email}</p> 
                </div>
            ))
            : 
            <p className='no-items'>No Items to display</p>
          }
          </div>
        )}
    </div>
   
  );
}

export default App;
