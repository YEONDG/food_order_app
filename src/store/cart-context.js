import React from 'react'
import { createContext } from 'react';

const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {}
});

export default createContext;