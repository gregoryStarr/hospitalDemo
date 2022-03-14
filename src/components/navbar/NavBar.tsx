import React from 'react';
import {Link} from 'react-router-dom';

export const NavBar = () =>
    <nav className="primary-nav">
        <ul>
            <li>
                <Link to="/">Hospital List</Link>
            </li>
            <li>
                <Link to="/add">Add New Hospital</Link>
            </li>
            <li>
                <Link to="/delete">Delete</Link>
            </li>
        </ul>
    </nav>;