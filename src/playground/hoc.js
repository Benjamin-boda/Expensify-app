import React from "react";
import ReactDOM from "react-dom";


const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The infos is {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is a private info. Please don't share</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentification = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuth ? ( 
                <WrappedComponent {...props} /> 
            ) : ( 
                <p>Please log in to see the infos</p>
            )}
        </div>
    )
}

const AdminInfo = withAdminWarning( Info );
const AuthInfo = requireAuthentification ( Info );

// ReactDOM.render(<AdminInfo isAdmin={true} info=" There are some details"/>, document.getElementById("app"));
ReactDOM.render(<AuthInfo isAuth={true} info=" There are some details"/>, document.getElementById("app"));