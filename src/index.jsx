import React from "react";
import ReactDom from "react-dom/client";

const root = ReactDom.createRoot(document.getElementById("root"));
/**<>Se usará fragmentos Vacios al inicio! </> */
root.render(
    <>   
        <LoadComponents />
        <UserData />
        <UserInterface />
        <PermisionReview />
    </>
);

function LoadComponents() {
    return <h2>Loading components...</h2>
}

function UserData() {
    return <h3>Query Data from Users Table</h3>
}

function UserInterface() {
    return <h3> aparence of interface with user data</h3>
}

function PermisionReview() {
    const level = 1;
    return <h3>{level >= 1 ? 'NO ADMIN' : 'ADMIN'}</h3>
}


