/* Colors pallete */
import React, { Component } from 'react';

let primary;
let primLight;
let primDark;
let text;
let accent;

switch( theme ) {
    // Dark theme
    case "dark":
        primary = '#424242';
        primLight = '#6d6d6d';
        primDark = '#1b1b1b';
        text = '#ffffff';
        accent = '#ff0000';
        break;
    // Light Theme
    case "light":
        primary = 'green';
        primLight = 'red';
        primDark = 'blue';
        text = 'white';
        accent = 'yellow';
        break;
}; 

export default {
    primary,
    primLight,
    primDark,
    text,
    accent,
    theme,
}
