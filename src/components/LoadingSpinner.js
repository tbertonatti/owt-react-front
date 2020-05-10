import React from 'react';
function LoadingSpinner(props) {
    return (
        <>
            {props.loading && (
                <>
                    Loading {props.text}... <div className="spinner-border" role="status">
                        <span className="sr-only">Loading...</span>
                    </div>
                </>
            )}
        </>
    );
}

export default LoadingSpinner;