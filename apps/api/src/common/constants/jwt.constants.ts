export const accessTokenExpireTime = '15m';
export const refreshTokenExpireTime = '14d';

export const accessTokenName = 'X-ACCESS';
export const refreshTokenName = 'X-REFRESH';

export const refreshTokenExpireTimeByMilliSecond = 14 * 24 * 60 * 60 * 1000; // 14-day
export const accessTokenExpireTimeByMilliSecond = 15 * 60 * 1000; //15-min

export const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax' as const,
  path: '/',
};
