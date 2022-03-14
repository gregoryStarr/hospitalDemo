import React from "react";
import { Outlet } from "react-router-dom";
import { NavBar } from 'components/navbar/NavBar'


type Props = {};

export const AppLayout = (props) =>
{

    return (
        <div color="gray900">
            <section color="gray400">
            <h1>App Layout</h1>
            </section>'
            <NavBar />
            <section>
                <Outlet />
            </section>

        </div>
    );
};