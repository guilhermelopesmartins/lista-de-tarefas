import React from 'react';
import { DivHeader, H1 } from "./styles";

export const Header = ({ title, textColor }) => {
    return (
        <DivHeader>
            <H1 style={{ color: textColor }}>{title}</H1>
        </DivHeader>
    );
};
