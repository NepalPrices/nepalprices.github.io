export function makeAuthenticatedApiCall(endpoint: string, options = {}) {
  const config = useRuntimeConfig();

  return useFetch(config.public.apiBase + endpoint, {
    ...options,
    headers: {
      "x-api-key": config.apiKey,
      ...options.headers,
    },
  });
}
