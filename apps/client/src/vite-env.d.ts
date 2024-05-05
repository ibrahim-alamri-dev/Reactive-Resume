/* eslint-disable @typescript-eslint/consistent-type-definitions */
/// <reference types="vite/client" />

declare const appVersion: string;

interface ImportMetaEnv {
  VITE_CLIENT_SENTRY_DSN: string | undefined;
  VITE_DISABLE_SIGNUPS: string | undefined;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
