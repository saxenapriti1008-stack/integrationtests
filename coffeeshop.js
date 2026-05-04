export const createDrink = (type) => {
  const menu = {
    latte: 45,
    espresso: 30,
    cappuccino: 50,
  };
  return { type: type, price: menu[type] };
};

const prepareOrder = (drink) => {
  console.log(`Preparing ${drink.type}...`);
  const ticket = Math.floor(Math.random() * 1000);
  return ticket;
};

const processPayment = (ticketNumber, amount) => {
  if (!ticketNumber && ticketNumber !== 0) {
    throw new Error("No ticket number provided");
  }
  console.log(`Payment of ${amount} received for ticket #${ticketNumber}`);
  return true;
};

const orderDrink = (drinkType) => {
  const drink = createDrink(drinkType);
  const ticket = prepareOrder(drink);
  const paymentSuccess = processPayment(ticket, drink.price);
  return paymentSuccess;
};

export { prepareOrder, orderDrink };