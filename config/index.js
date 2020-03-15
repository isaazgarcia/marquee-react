const dev = process.env.NODE_ENV !== 'production';
export const ApiUrl = dev ? 'http://localhost:3000' : 'https://marquee-react.now.sh/';
