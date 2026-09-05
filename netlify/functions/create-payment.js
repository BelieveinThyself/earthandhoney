/ netlify/functions/create-payment.js

exports.handler = async (event) => {
  try {
    const { email, amount, productName } = JSON.parse(event.body);

    const response = await fetch("https://api.paystack.co/transaction/initialize", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_SECRET_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        amount: amount * 100, // Paystack uses kobo / cents
        metadata: {
          product: productName,
        },
      }),
    });

    const data = await response.json();

    if (!data.status) {
      return {
        statusCode: 400,
        body: JSON.stringify(data),
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };

  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
