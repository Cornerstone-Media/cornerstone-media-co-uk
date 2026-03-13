/// <reference types="vite/client" />

declare global {
  interface Window {
    dataLayer: Record<string, unknown>[];
    grecaptcha: any;
  }
}

export {};
