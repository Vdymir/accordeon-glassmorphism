import styled from 'styled-components';

export const BoxContainer = styled.div`

    width: 60%;
    height: 70vh;
    background: linear-gradient(to top, rgba(255,255,255, 0.7), rgba(255,255,255,0.3));
    border: 1px solid #fff;
    border-radius: 2rem;
    box-shadow: 1px 5px 12px rgba(0,0,0,.5);
    backdrop-filter: blur(5px);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

   

    
`;
export const Questions = styled.div`

    background: rgba(205,285,285,0.6);
    width: 70%;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 5px;
    border-radius: 12px;
    box-shadow: 1px 5px 12px rgba(0,0,0,.5);
    
`;
export const Title = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    cursor: pointer;
    h2 {
        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
        font-size: 25px;
        color: #191919;
    }

    span {
        font-weight: bold;
        font-size: 20px;
    }
`;
export const Answer = styled.div`
    text-align: justify;
    color: #000;
    max-height: auto;
    overflow: hidden;
    transition: all .3s cubic-bezier(1,0,1,0);

   
`;