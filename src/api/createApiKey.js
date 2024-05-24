export const createApiKey = async token => {
  const name = { name: 'API_KEY' };
  const OPTIONS = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(name),
  };
  try {
    const response = await fetch(
      'https://v2.api.noroff.dev/auth/create-api-key',
      OPTIONS,
    );
    if (!response.ok) {
      const errorData = await response.json();
      console.log(errorData);
      throw new Error('Failed to create API KEY');
    }
    const { data } = await response.json();

    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
