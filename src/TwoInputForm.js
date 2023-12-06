import './TwoInputForm.css';
import ButtonUni from './ButtonUni';
import FormInput from './FormInput';


function TwoInputForm({ heading, subheading, placeholder1, placeholder2, buttonContent, onFormSubmit }) {
    // may be use input1 and input2 useStates 
    
    return (
      <div className='two-input-form'>
        <div className='heading'>
          <h1>{heading}</h1>
          <h4>{subheading}</h4>
        </div>
        <form onSubmit={onFormSubmit}>
          <FormInput 
            placeholder={placeholder1}
            height="59.2px" 
            width="461px" 
            margin_top="42.21px" 
          />
          <FormInput 
            placeholder={placeholder2}
            height="59.2px" 
            width="461px" 
            margin_top="19.57px" 
          />
          <ButtonUni 
            content={buttonContent} 
            height="62px" 
            width="461px" 
            margin_top="39.84px"
            onClick={onFormSubmit}
          />
        </form>
      </div>
    );
}
  
export default TwoInputForm;
