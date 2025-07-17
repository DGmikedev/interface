import React from "react";
import ReactDom from "react-dom/client";
import { LoadComponents } from "./modules/status/LoadComponents";
import { UserData } from "./modules/data/UserData"
import { UserInterface } from "./modules/status/UserInterface";

const root = ReactDom.createRoot(document.getElementById("root"));
/**<>Se usará fragmentos Vacios al inicio! </> */
root.render(
    <>
        <LoadComponents status="load base" id={0} />
        <UserData />
        <UserInterface />
        <PermisionReview />
    </>
);


function PermisionReview() {
    const level = 0;
    return <h3>{level >= 1 ? 'NO ADMIN' : 'ADMIN'}</h3>
}


