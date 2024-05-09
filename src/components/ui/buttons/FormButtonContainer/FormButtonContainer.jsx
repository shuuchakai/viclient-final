import './FormButtonContainer.css';

function FormButtonContainer({ buttonOnClick, children }) {
    return (
        <button className="signup_buttonContainer" onClick={buttonOnClick}>{children}</button>
    )
}

export default FormButtonContainer;