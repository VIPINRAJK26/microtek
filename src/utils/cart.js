export const getAnonCart = () => {
  return JSON.parse(localStorage.getItem("anon_cart")) || [];
};

export const setAnonCart = (cart) => {
  localStorage.setItem("anon_cart", JSON.stringify(cart));
};

export const clearAnonCart = () => {
  localStorage.removeItem("anon_cart");
};
