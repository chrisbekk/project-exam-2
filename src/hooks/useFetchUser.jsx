import { useState } from 'react';

export default function useFetchUser() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
}
