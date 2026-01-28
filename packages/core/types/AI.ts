export interface AIConfig {
  instructions?: string;
  stream?: boolean;
  required?: boolean;
  exclude?: boolean;
  schema?: Record<string, any>;
}
