import './CategoryButton.css';

function CategoryButton({ category, onClick }) {
    return (
        <button className='category-button' onClick={onClick}>{category}</button>
    );
}

export default CategoryButton;
