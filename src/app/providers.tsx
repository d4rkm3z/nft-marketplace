'use client';

import React, { FC, PropsWithChildren } from 'react';

import { ThemeProvider } from 'next-themes';

const Providers: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider attribute={'class'}>{children}</ThemeProvider>
);

export default Providers;
