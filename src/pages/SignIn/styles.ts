import styled from 'styled-components';
import signInBackgroundImage from '../../assets/sign-in-background.png'
import { shade } from 'polished';

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items:center;
    place-content: center;
    width: 100%;
    max-width: 700px;

    form {
        margin: 80px 0;
        width: 340px;
        text-align: center;        
        
        h1 {
            margin-bottom: 24px;        
        }
    
        input {
            background: #232129;
            border-radius: 10px;
            border: 2px solid #233129;
            padding: 16px;
            width: 100%;
            color: #F4EDE8;

            & + input {
                margin-top: 8px;
            }
            
            &::placeholder {
                color: #667360;
            }
        }
    
        button {
            background: #ff9000;
            height: 56px;
            border-radius: 10px;        
            padding: 0 16px;
            width: 100%;
            color: #312E38;
            font-weight: 500;
            margin-top: 16px;
            transition: background-color 0.3s;
    
            &:hover {
                background: ${shade(0.3,'#ff9000')};
            }
        }
    
        a {
            color: #F4EDE8;
            display: block;
            margin-top: 24px;
            text-decoration: none;
            transition: color 0.3s;
    
            &:hover {
                color: ${shade(0.3, '#F4EdE8')}
            }
        }
    }
    > a {
        color: #FF9000;
        display: block;
        margin-top: 24px;
        text-decoration: none;
        transition: color 0.3s;
        display: flex;
        align-items: center;

        svg {
            margin-right: 16px;
        }

        &:hover {
            color: ${shade(0.3, '#FF9000')}
        }
    }
`;

export const Background = styled.div`
    flex: 1;
    background: url(${signInBackgroundImage}) no-repeat center;
    background-size: cover;
`;