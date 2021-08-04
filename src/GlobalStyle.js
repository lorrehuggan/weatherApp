import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
    --headlineBig: 3.75rem;
    --headlineMedium: 2.25rem;
    --headlineSmall: 1.5rem;
    --fontBig: 1.25rem;
    --fontMedium: 1rem;
    --fontSmall: .75rem;

}
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}

body {
    font-family: 'Lato', sans-serif;
    overflow: hidden;
    background-color: rgba(55, 126, 138, 1);
}



`;
