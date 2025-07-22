import React from "react";
import ReactDom from "react-dom/client";
/* import { LoadComponents } from "./modules/status/LoadComponents";
import { UserData } from "./modules/data/UserData"
import { UserInterface } from "./modules/status/UserInterface";
import { Buttonm } from "./modules/html/Button"*/
import {Card} from "./modules/cards/Card";


const root = ReactDom.createRoot(document.getElementById("root"));
/**<>Se usará fragmentos Vacios al inicio! </> */
root.render(
    <>

        <Card textop="Hola me presento" />
     {/*    
        <LoadComponents status="load base" id={0} />
        <UserData />
        <Buttonm texto="Play"    song="track 1"   />
        <Buttonm texto="stop"    song="track 1"   />
        <Buttonm texto="forwad"  song="track 1"   />
        <Buttonm texto="rewind"  song="track 1"    />
        <UserInterface />
        <PermisionReview /> */}
    </>
);


function PermisionReview() {
    const level = 0;
    return <h3>{level >= 1 ? 'NO ADMIN' : 'ADMIN'}</h3>
}


