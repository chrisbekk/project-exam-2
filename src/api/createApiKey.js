export default async function createApiKey(token) {
  let apiKey;
  console.log(token);
  try {
    const response = await fetch(
      'https://v2.api.noroff.dev/auth/create-api-key',
      {
        method: 'POST',
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        headers: {
          'Content-Type': 'application/json',
          Auhorization: `Bearer ${token}`,
        },
      },
    );
    if (!response.ok) {
      const errorData = await response.json();
      //console.log(errorData);
      throw new Error('Failed to create API KEY');
    }
    const responseData = await response.json();
    //console.log(responseData);
    apiKey = responseData;
    return apiKey;
  } catch (error) {
    console.log(error);
  }
}
