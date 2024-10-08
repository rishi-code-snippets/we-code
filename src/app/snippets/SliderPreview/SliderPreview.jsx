import { useState, useCallback, useEffect, useRef } from "react";

import styled from "styled-components";

const SliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2.5rem;
  width: clamp(22rem, 90%, 64rem);
  height: 20rem;
  margin: 0 auto;

  &.dark{
    --bg: linear-gradient(to bottom right, #1e2022, #22262f);
    --txtBg: linear-gradient(
      to bottom right,
      #d4d4d8, #52525b
    );
    --borderClr: rgba(127, 127, 127, .5);
  }

  &.light{
    --bg: linear-gradient(to bottom right, #fff, #cecece);
    --txtBg: linear-gradient(to bottom right,#93c5fd, #1e3a8a);
    --borderClr: rgb(60 146 232 / 0.5);
  }

  &.custom{
    --bg: linear-gradient(to bottom right, #ccfbf1, #60a5fa);
    --txtBg: linear-gradient(to bottom right,#6996f8, #1e3a8a);
    --borderClr: rgba(230, 230, 230, 0.5);
  }

  @media (max-width: 700px){
    gap: 0;
  }
`;

const SliderEle = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  transform-style: preserve-3d;
  perspective: 500px;
`;

const Slide = styled.div`
  width: clamp(8rem, 10rem, 25rem);
  height: clamp(10rem, 12rem, 27rem);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  border-width: 1px;
  transition: 0.5s;
  border-color: var(--borderClr);
  background: var(--bg);
  transition-timing-function: cubic-bezier(0.9, 0, 0.1, 1);

  span {
    position: absolute;
    border-radius: inherit;
    display: flex;
    height: 3rem;
    width: 3rem;
    align-items: center;
    justify-content: center;
    background-image: var(--txtBg);
    -webkit-background-clip: text;
    background-clip: text;
    font-size: 2.25rem;
    line-height: 2.5rem;
    font-weight: 800;
    color: transparent;
  }

  @media (max-width: 700px){
    width: clamp(4rem, 6rem, 25rem);
    height: clamp(6rem, 8rem, 27rem);

    span{
      font-size: 1.6rem;
    }
  }
`;

const SliderButtons = styled.div`
    display: flex;
    gap: 1.5rem;
    z-index: 1;

    button{
      display: flex;
      height: 2rem;
      width: 2rem;
      align-items: center;
      justify-content: center;
      border-radius: 50%;
      background-image: var(--bg);
      position: relative;
      /* background-image: linear-gradient(to bottom right,#f8fafc, #e2e8f0); */
      box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    }

    button::before{
      content: '';
      width: 80%;
      height: 80%;
      background: var(--txtBg);
      position: absolute;
      border-radius: inherit;
      transition: .3s;
      opacity: .5;
    }

    button:hover::before{
      opacity: 1;
    }

    button:nth-of-type(1)::before{
      mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M14.29 5.707a1 1 0 0 0-1.415 0L7.988 10.6a2 2 0 0 0 0 2.828l4.89 4.89a1 1 0 0 0 1.415-1.414l-4.186-4.185a1 1 0 0 1 0-1.415l4.182-4.182a1 1 0 0 0 0-1.414Z' fill='%230F0F0F'/%3E%3C/svg%3E");
    }

    button:nth-of-type(2)::before{
      mask-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M9.71 18.293a1 1 0 0 0 1.415 0l4.887-4.892a2 2 0 0 0 0-2.828l-4.89-4.89a1 1 0 0 0-1.415 1.414l4.186 4.185a1 1 0 0 1 0 1.415L9.71 16.879a1 1 0 0 0 0 1.414Z' fill='%230F0F0F'/%3E%3C/svg%3E");
    }
`;

const debounce = (func, delay) => {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => func(...args), delay);
    };
  };

const SliderPreview = (props) => {
    const theme = props.theme || 'dark';

    const componentRef = useRef(null);

    const generatedTransformsArr = ['translate3d(-200%, -50%, 0rem) rotateY(45deg) scale(0.85)', 'translate3d(-150%, -50%, 3rem) rotateY(30deg) scale(0.9)', 'translate3d(-100%, -50%, 6rem) rotateY(15deg) scale(0.95)', 'translate3d(-50%, -50%, 9rem)', 'translate3d(0%, -50%, 6rem) rotateY(-15deg) scale(0.95)', 'translate3d(50%, -50%, 3rem) rotateY(-30deg) scale(0.9)', 'translate3d(100%, -50%, 0) rotateY(-45deg) scale(0.85)'];

    const [transformsArr, setTransformsArr] = useState(generatedTransformsArr);

    const navigate = useCallback(
        (isNext) => {
          setTransformsArr(prevTransforms => {
            const newTransforms = [...prevTransforms];
            if (isNext) {
                // Move the last item to the start
                newTransforms.unshift(newTransforms.pop());
            } else {
                // Move the first item to the end
                newTransforms.push(newTransforms.shift());
            }
            return newTransforms;
          });
        },
        []
    );

    const debouncedNavigateNext = useCallback(debounce(() => navigate(true), 300), [navigate]);
    const debouncedNavigatePrev = useCallback(debounce(() => navigate(false), 300), [navigate]);

    const displayNumbers = [5, 6, 7, 1, 2, 3, 4];

    useEffect(() => {
      if(componentRef.current) componentRef.current.style.opacity = 1;
    }, [componentRef.current]);

    return (
      <SliderContainer className={theme} ref={componentRef} style={{opacity: 0}} onClick={(e)=>e.stopPropagation()}>
        <SliderEle>
            {
                transformsArr.map(
                    (currentTransform, index) => 
                        <Slide key={`slide-${index+1}`} style={{transform: currentTransform}}>
                            <span>{displayNumbers[index]}</span>
                        </Slide>)
            }
        </SliderEle>
        <SliderButtons>
            <button
            id="prev-slide"
            aria-label="Previous Slide"
            title="Go To Previous Slide"
            onClick={debouncedNavigatePrev}
            ></button>
            <button id="nxt-slide" aria-label="Next Slide" title="Go To Next Slide" onClick={debouncedNavigateNext}></button>
        </SliderButtons>
      </SliderContainer>
    );
};

export default SliderPreview;
