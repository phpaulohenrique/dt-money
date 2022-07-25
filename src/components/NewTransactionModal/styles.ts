import styled from 'styled-components';
import curriedDarken from 'polished/lib/color/darken';
import curriedTransparentize from 'polished/lib/color/transparentize';



export const Container = styled.form`
    h2{
        color: var(--text-title);
        font-size: 1.5rem;
        margin-bottom: 2rem;
    }

    input{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        border-radius: 4px;

        border: 1px solid #d7d7d7;
        background-color: #e7e9ee;

        font-weight: 400;
        font-size: 1rem;


        &::placeholder{
            color: var(--text-body)
        }


        & + input{
            margin-top: 1rem;
        }
    }


    button[type="submit"]{
        width: 100%;
        padding: 0 1.5rem;
        height: 4rem;
        background-color: var(--green);

        color: #FFFFFF ;
        border-radius: 4px;
        border: 0;
        font-size: 1rem;

        margin-top: 1.5rem;
        font-weight: 600;

        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9)
        }

    }
`;


export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;


`

interface RadioBoxProps{
    isActive: boolean;
    activeColor: 'green' | 'red';
}

const colors = {
    red: '#E52E4D',
    green: '#33cc95',

}

export const RadioBox = styled.button<RadioBoxProps>`

    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 4px;

    background: ${(props) => props.isActive 
    ?  curriedTransparentize(0.8,colors[props.activeColor]) 
    : 'transparent'
    };

    display: flex;
    justify-content: center;
    align-items: center;

    transition: border-color 0.2s;

    &:hover{
        border-color: ${curriedDarken(0.1, '#d7d7d7')}
    }


    img{
        width: 20px;
        height: 20px;
    }

    span{
        display: inline-block;
        margin-left: 1rem;
        font-size: 1rem;
        color: var(--text-title)
    }
`