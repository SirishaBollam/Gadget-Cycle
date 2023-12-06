import './GradientBackground.css';

function GradientBackground({left_color, right_color}) {
    return (
        <div className='gradient-background'>
            <div className='left-blur' style={{background : left_color}}></div>
            <div className='right-blur' style={{background : right_color}}></div>
        </div>
    );
}

export default GradientBackground;
