register(({ analytics, settings }) => {
  analytics.subscribe('checkout_completed', (event) => {
    const { checkout } = event.data;

    fetch('https://example.com/collect', {
      method: 'POST',
      keepalive: true,
      body: JSON.stringify({
        account: settings.account_id,
        order: checkout.order?.id,
        total: checkout.total_price,
        currency: checkout.currency_code,
      }),
    });
  });
});
