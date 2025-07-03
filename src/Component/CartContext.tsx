import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

interface Product {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
    [key: string]: any;
}


interface CartContextType {
    cart: Product[];
    addToCart: (product: Product) => void;
    removeFromCart: (productId: number) => void;
    decreaseToCart: (product: Product) => void;
    calculateCartTotal: () => number;
    finalTotal: number;
    finalizeCartTotal: () => void;
    finalizeCartTotalWithCoupon: (value: number) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
    const [cart, setCart] = useState<Product[]>([]);
    const [finalTotal, setFinalTotal] = useState<number>(0);

    const addToCart = (product: Product) => {
        setCart((prevCart) => {
            const existingProduct = prevCart.find((item) => item.id === product.id);
            if (existingProduct) {
                return prevCart.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
                );
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const finalizeCartTotalWithCoupon = (value: number) => {
        setFinalTotal(value);
    };

    const calculateCartTotal = (): number => {
        return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    };

    const finalizeCartTotal = () => {
        const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
        setFinalTotal(total);
    };

    const decreaseToCart = (product: Product) => {
        setCart((prevCart) => {
            return prevCart.map((item) => {
                if (item.id === product.id) {
                    const newQuantity = item.quantity - 1;
                    return newQuantity >= 1 ? { ...item, quantity: newQuantity } : item;
                }
                return item;
            });
        });
    };

    const removeFromCart = (productId: number) => {
        setCart((prevCart) => prevCart.filter((product) => product.id !== productId));
    };

    return (
        <CartContext.Provider value={{ cart, finalizeCartTotalWithCoupon, calculateCartTotal, decreaseToCart, addToCart, removeFromCart, finalTotal, finalizeCartTotal }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
};