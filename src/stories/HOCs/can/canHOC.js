import React from "react";

const higherOrederComponent = (WrappedComponent) => {
  const hocComponent = ({ ...props }) => {
    if (!props.isAuth) return <span>Access denied. Please log in.</span>;
    if (props.isBanned) return <span>Your account has been banned for several days.</span>;

    return (
      <>
        {!props.isAdmin && <span>You not authorized to edit this article.</span>}
        <WrappedComponent {...props} />
      </>
    );
  };

  return hocComponent;
};

export default higherOrederComponent;
