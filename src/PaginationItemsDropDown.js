import { useState } from 'react';
import './PaginationItemsDropDown.css';
import expandMoreImg from './images/expand_more.svg';

function PaginationItemsDropDown({ onValueChange }) {
    const options = [2, 4, 6, 8, 10, 12, 14, 16];

    const [selectedValue, setSelectedValue] = useState(options[0]);

    const handleValueChange = (event) => {
        setSelectedValue(event.target.value);
        if (onValueChange) {
            onValueChange(event.target.value);
        }
    }

    return (
        <div className='items-drop-down'>
            <label htmlFor='items'>Show</label>
            <select className="show-items" value={selectedValue} onChange={handleValueChange}>
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default PaginationItemsDropDown;
