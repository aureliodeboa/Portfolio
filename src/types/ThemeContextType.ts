//cria o type do context
export type ThemeContextType = {
    theme: String;
    setTheme: (newTheme:string)=>void;
}