exponea.start({
  cookies: {
    expires: 1,
  },
  ping: {
    enabled: false,
  },
  track: {
    visits: false,
  },
});

exponea.track("purchase", {
  purchase_status: "success",
  os: "undefined",
  product_list: [{ product_id: "abc123", quantity: 1 }],
  total_price: 7.99,
  payment_type: "credit_card",
});

delete exponea;
