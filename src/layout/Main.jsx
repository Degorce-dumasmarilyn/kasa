// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Main.scss";
import PropTypes from "prop-types";

function Main({ children }) {
    return <div className="Main">{children}</div>;
}

Main.propTypes = {
    children: PropTypes.node.isRequired
};

export default Main;
