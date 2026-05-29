"use client";
import { createContext, useContext, useState, useEffect } from "react";
import toast from "react-hot-toast";

const AppContext = createContext();

export function AppProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistIds, setWishlistIds] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isReady, setIsReady] = useState(false);

  // Add login/logout functions
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    // setCartItems([]); 
    // setWishlistIds([]); 
  };

  // Load from localStorage on mount
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) setUser(JSON.parse(savedUser));
    
    const savedCart = localStorage.getItem("cart");
    if (savedCart) setCartItems(JSON.parse(savedCart));

    const savedWishlist = localStorage.getItem("wishlist");
    if (savedWishlist) setWishlistIds(JSON.parse(savedWishlist));
    setIsReady(true);
  }, []);

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlistIds));
  }, [wishlistIds]);

  // Cart functions
  const addToCart = (product, quantity = 1) => {
    if (!user) {
      toast.error("Please login to add items to cart");
      return;
    }
    setCartItems((prev) => {
      const existingItem = prev.find((item) => item.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          price: product.price,
          thumbnail: product.thumbnail,
          quantity: quantity,
        },
      ];
    });
    toast.success(`${product.name} added to cart!`);
    // Optionally auto-open sidebar
    // setIsCartOpen(true);
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      setCartItems((prev) => prev.filter((item) => item.id !== productId));
      toast.success("Item removed from cart");
    } else {
      setCartItems((prev) =>
        prev.map((item) =>
          item.id === productId ? { ...item, quantity: newQuantity } : item,
        ),
      );
    }
  };

  const getCartTotalCount = () => {
    return cartItems.reduce((total, item) => total + item.quantity, 0);
  };

  const getCartTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  };

  // Wishlist functions
  const addToWishlist = (productId, productName) => {
    if (!wishlistIds.includes(productId)) {
      setWishlistIds((prev) => [...prev, productId]);
      toast.success(`${productName} added to wishlist!`);
    }
  };

  const removeFromWishlist = (productId, productName) => {
    setWishlistIds((prev) => prev.filter((id) => id !== productId));
    toast.success(`${productName} removed from wishlist`);
  };

  const isInWishlist = (productId) => {
    return wishlistIds.includes(productId);
  };

  const toggleWishlist = (productId, productName) => {
    if (!user) {
      toast.error("Please login to manage your wishlist");
      return;
    }
    if (isInWishlist(productId)) {
      removeFromWishlist(productId, productName);
    } else {
      addToWishlist(productId, productName);
    }
  };

  // Cart sidebar controls
  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  return (
    <AppContext.Provider
      value={{
        cartItems,
        wishlistIds,
        addToCart,
        updateQuantity,
        getCartTotalCount,
        getCartTotalPrice,
        toggleWishlist,
        isInWishlist,
        isCartOpen,
        openCart,
        closeCart,
        isReady,
        user,
        login,
        logout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useAppContext() {
  return useContext(AppContext);
}
