import 'styled-componets';

declare module 'styled-components' {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secondary: string;
            background: string;
            text: string;
            border: string;
            light: string;
            disabled: string;
            disabledBox: string;
            disabledText: string;
            inputBorder: string;
            bgLight: string;
            alert: string;
            filterBox: string;
            textDark: string;
            error: string;
        }
    }
}