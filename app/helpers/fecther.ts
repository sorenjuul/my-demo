function getBaseUrl() {
  if (typeof window !== 'undefined') return '';
  const vc = process.env.VERCEL_URL;
  if (vc) return `https://${vc}`;
  return 'http://localhost:3000';
}

export const fetchJson = async (url: string, options: any) => {
  const response = await fetch(getBaseUrl() + url, options);
  if (!response.ok) {
    throw new Error(`Error fetching ${url}: ${response.statusText}`);
  }
  return response.json();
};
