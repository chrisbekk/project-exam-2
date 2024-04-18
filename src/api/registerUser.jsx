export default async function registerUser(payload) {
  const fetchOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  };

  try {
    const response = await fetch(
      'https://v2.api.noroff.dev/auth/register',
      fetchOptions,
    );
    if (!response.ok) {
      const errorData = await response.json();
      const error = new Error();
      error.data = errorData;
      throw error;
    }
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error.data);
  }
}
