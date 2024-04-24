import React from 'react';
import { Navigate, Outlet } from "react-router-dom";
import { selectCurrentUser } from "../../features/session/sessionSlice";
import { useSelector } from 'react-redux';

export default function Networking(){
    return (
        <>
        <h1>This is the Networking page</h1>
        </>
    );
}