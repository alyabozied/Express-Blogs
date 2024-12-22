declare global {
    namespace NodeJS {
      interface ProcessEnv {
        PORT: integer;
        DATABASE_URL: string;
      }
    }
  }