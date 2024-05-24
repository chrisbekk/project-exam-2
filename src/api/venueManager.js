export const venueManager = async (userName, accessToken, apiKey, payload) => {
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
      const error = response.json();
      throw new Error('Failed to update venue manager status');
    }
    const { data } = await response.json();
    console.log(data);
    return data.venueManager;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
