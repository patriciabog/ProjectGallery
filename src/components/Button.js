function Button ({className,text, handleClickCreateCard}) {
    return (
        <button 
        className={className}
        onClick={handleClickCreateCard}
        >
            {text}
        </button>
        );
};

export default Button;