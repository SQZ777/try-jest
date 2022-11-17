test('test on lesson 4', async () => {
  headers = {
    Authorization: `Bearer {資安風險請置換 token}`,
  };
  const select = `unavailable`;

  const response = await fetch(
      `https://apiweb.awoo.org/nununi/v1/8928758771/popular-products?select=${select}`,
      {
        headers: headers,
        method: 'GET',
      },
  )
      .then(function(response) {
        return response.json();
      })
      .then(function(responseJson) {
        return responseJson;
      });
  expect(response.errcode).toBe(0);
});
