export const updateProfile = async (userName, accessToken, apiKey, payload) => {
  let url = `https://v2.api.noroff.dev/holidaze/profiles/${userName}`;
  const OPTIONS = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${accessToken}`,
      'X-Noroff-API-Key': apiKey,
    },
    body: JSON.stringify(payload),
  };

  try {
    const response = await fetch(url, OPTIONS);
    if (!response.ok) {
      const error = await response.json();
      console.log(error);
      throw new Error('Failed to update profile');
    }
    const { data } = await response.json();
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
