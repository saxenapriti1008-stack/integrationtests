export const findBook = (title) => {
  const catalogue = {
    dune: 89,
    neuromancer: 79,
    foundation: 75,
  };
  return { title: title, price: catalogue[title] };
};

const reserveStock = (book) => {
  console.log(`Reserving stock for ${book.title}`);
  const code = Math.floor(Math.random() * 9000) + 1000;
  return code;
};

const confirmPurchase = (reservationCode, price) => {
  if (!reservationCode) {
    throw new Error("Invalid reservation");
  }
  console.log(`Purchase confirmed. Reservation: ${reservationCode}, Amount: ${price}`);
  return { success: true, code: reservationCode };
};

const buyBook = (title) => {
  const book = findBook(title);
  const code = reserveStock(book);
  const result = confirmPurchase(code, book.price);
  return result;
};

export { reserveStock, buyBook };