export const json = (...args: Parameters<typeof fetch>) =>
  fetch(...args).then(res => res.json())
