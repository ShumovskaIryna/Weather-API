export const Credential: {
  API_KEY: string
} = {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  API_KEY: process.env.REACT_APP_API_KEY ?? ''
}
