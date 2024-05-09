import './SignupInputContainer.css';

function SignupInputContainer({ labelContent, inputType, inputPlaceholder, inputValue, inputOnChange, inputError }) {
    return (
        <div className="signup_inputContainer">
            <label className="signup_inputContainer_label">{labelContent}:</label>
            <input
                className="signup_inputContainer_input"
                type={inputType}
                placeholder={inputPlaceholder}
                value={inputValue}
                onChange={inputOnChange}
            />
            <p className="signup_inputContainer_error">{inputError}</p>
        </div>
    )
}

export default SignupInputContainer