import React from 'react';
function ErrorDisplay(props) {
    return (
        <>
            {props.error && (
                <>
                    <div className="alert alert-danger" role="alert">
                        {props.error}
                    </div>
                </>
            )}
        </>
    );
}

export default ErrorDisplay;