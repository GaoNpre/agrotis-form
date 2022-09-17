import styled from 'styled-components';

export const Container = styled.header`
    background-color: ${props => props.theme.palette.secundary};
    width: 100%;
    height: auto;
`;

export const FormHeader = styled.header`
    padding: 0 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 48px;
    background-color: ${props => props.theme.palette.primary};
    color: ${props => props.theme.palette.text.secondary};
    font-weight: bold;

    .MuiButton-contained {
        color: ${props => props.theme.palette.text.secondary};
        box-shadow: none;
        background-color: ${props => props.theme.palette.primary};
    }

    .MuiButton-contained:hover {
        background-color: ${props => props.theme.palette.buttonHover};
        border-radius: 2px;
    }
`;

export const FormBody = styled.form`
    padding: 16px;
    display: grid;
    align-items: baseline;
    grid-template-areas: 
        'name name initialDate finalDate'
        'property property lab lab'
        'obs obs obs obs';
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto;
    gap: 16px;

    @media (max-width: 800px)  {
        grid-template-areas: 
            'name'
            'initialDate'
            'finalDate'
            'property'
            'lab'
            'obs';
        grid-template-columns: 1fr;
    }

    .item-1 { grid-area: name; }
    .item-2 { grid-area: initialDate; }
    .item-3 { grid-area: finalDate; }
    .item-4 { grid-area: property; }
    .item-5 { grid-area: lab; }
    .item-6 { grid-area: obs; }

    .MuiAutocomplete-root {
        width: auto;
    }

    .MuiInput-colorSecondary.MuiInput-underline:after {
        border-bottom-color: ${props => props.theme.palette.primary};
    }

    .MuiInput-underline:after {
        border-bottom: 2px solid ${props => props.theme.palette.primary};
    }

    .MuiInput-underline:before {
        border-bottom: 1px solid rgb(110 110 110 / 40%);
    }

    .MuiFormLabel-root.Mui-focused {
        color: grey;
    }

    .MuiInput-underline:hover:not(.Mui-disabled):before {
        border-bottom: 2px solid rgb(0 0 0 / 40%);
    }

    .MuiFormHelperText-root {
        text-align: right;
    }

    .properties-combo-helper-text {
        text-align: left;
    }

    .MuiFormControl-marginNormal {
        margin-top: 0;
        margin-bottom: 0;
    }

    .autocomplete-options {
        display: flex;
        flex-direction: row;
    }

    .MuiFormHelperText-root.Mui-error {
        text-align: left;
    }

`;

export const ComboCustomOption = styled.div`

    .combo-custom-option-top {

    }

    .combo-custom-option-bottom {
        color: grey;
        font-size: small;
    }
`;