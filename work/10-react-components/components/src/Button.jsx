function Button({
                    type = 'button',
                    visual = 'button',
                    className = '',
                    onClick,
                    children,
                    ...props
                }) {
    const buttonClass = visual === 'link' ? 'button-link' : 'button';

    return (
        <button
            type={type}
            className={`${buttonClass} ${className}`}
            onClick={onClick}
            {...props}
        >
            {children}
        </button>
    );
}

export default Button;