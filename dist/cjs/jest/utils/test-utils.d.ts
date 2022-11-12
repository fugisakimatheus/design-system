import { RenderOptions } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
declare const customRender: (ui: React.ReactElement, options?: RenderOptions) => import("@testing-library/react").RenderResult<typeof import("@testing-library/dom/types/queries"), HTMLElement, HTMLElement>;
export * from '@testing-library/react';
export { customRender as render, userEvent };
