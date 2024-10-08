// import "./Search.css";
import { useEffect, useRef, useState } from "react";

import styled from "styled-components";

const SearchContainer = styled.div`
  --priBg: 28, 28, 40;
  
  &[data-theme="dark"]{
    --svgColor: 161 161 170;
    --pri: rgb(30, 32, 34);
    --sec: rgb(34, 38, 47);
    --priFntClr: rgb(161 161 170);
    --secFntClr: 212 212 216;
    --highlightClr: 212 212 216;
    --bgImg: url("data:image/svg+xml,%3Csvg fill='%23a1a1aacc' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 157' xml:space='preserve'%3E%3Cpath d='m253.823 41.499-.325.734c-2.41 5.503-8.319 9.204-14.332 9.204h-16.73v3.936c0 19.682-8.442 43.562-31.479 50.726l-3.909 41.513c2.862 1.12 4.892 3.898 4.892 7.156h-11.96l-4.781-51.275-39-6.766c-10.755 13.121-27.175 23.474-44.585 26.549l-3.695 24.37a7.688 7.688 0 0 1 4.795 7.121H80.756l.001-44.671c10.414-6.433 18.847-17.179 20.897-29.737 0 0-43.871 42.034-56.708 49.933-5.012 3.084-10.609 4.676-16.121 4.676-6.622 0-13.123-2.296-18.348-7.06-9.654-8.802-11.272-23.402-3.78-34.105l.722-1.035c5.007 5.223 11.765 7.918 18.623 7.918 4.441 0 8.925-1.131 13.003-3.438 12.878-7.285 33.765-21.585 41.987-26.531 5.561-3.345 13.409-6.095 19.728-7.581 15.761-3.706 67.877-8.57 67.877-8.57L222.434 2.23v16.513l-.013-.001c-.027 0 .013.012.013.012v-.011c.079.006.411.059 1.616.298a20.138 20.138 0 0 1 12.227 7.723l5.686 7.642 10.742 4.341a2.066 2.066 0 0 1 1.118 2.752zm-102.139 63.907-13.191-2.288c-4.227 4.708-9.067 8.946-14.301 12.598l13.93 39.052h11.96c0-4.146-3.284-7.517-7.392-7.673l-5.613-27.44c5.53-3.983 10.341-8.859 14.607-14.249zm64.187 41.763-6.906-44.331c-3.616 3.299-8.228 6.044-12.473 7.63l13.996 44.3h11.96c-.001-3.868-2.859-7.059-6.577-7.599z'/%3E%3C/svg%3E");
  }

 &[data-theme="light"]{
    --svgColor: 41 37 36;
    --pri: #fff;
    --sec: #eaeaea;
    --priFntClr: rgb(41,37,36);
    --secFntClr: 12 10 9;
    --highlightClr: 68 64 60;
    --bgImg: url("data:image/svg+xml,%3Csvg fill='%2378716c' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 157' xml:space='preserve'%3E%3Cpath d='m253.823 41.499-.325.734c-2.41 5.503-8.319 9.204-14.332 9.204h-16.73v3.936c0 19.682-8.442 43.562-31.479 50.726l-3.909 41.513c2.862 1.12 4.892 3.898 4.892 7.156h-11.96l-4.781-51.275-39-6.766c-10.755 13.121-27.175 23.474-44.585 26.549l-3.695 24.37a7.688 7.688 0 0 1 4.795 7.121H80.756l.001-44.671c10.414-6.433 18.847-17.179 20.897-29.737 0 0-43.871 42.034-56.708 49.933-5.012 3.084-10.609 4.676-16.121 4.676-6.622 0-13.123-2.296-18.348-7.06-9.654-8.802-11.272-23.402-3.78-34.105l.722-1.035c5.007 5.223 11.765 7.918 18.623 7.918 4.441 0 8.925-1.131 13.003-3.438 12.878-7.285 33.765-21.585 41.987-26.531 5.561-3.345 13.409-6.095 19.728-7.581 15.761-3.706 67.877-8.57 67.877-8.57L222.434 2.23v16.513l-.013-.001c-.027 0 .013.012.013.012v-.011c.079.006.411.059 1.616.298a20.138 20.138 0 0 1 12.227 7.723l5.686 7.642 10.742 4.341a2.066 2.066 0 0 1 1.118 2.752zm-102.139 63.907-13.191-2.288c-4.227 4.708-9.067 8.946-14.301 12.598l13.93 39.052h11.96c0-4.146-3.284-7.517-7.392-7.673l-5.613-27.44c5.53-3.983 10.341-8.859 14.607-14.249zm64.187 41.763-6.906-44.331c-3.616 3.299-8.228 6.044-12.473 7.63l13.996 44.3h11.96c-.001-3.868-2.859-7.059-6.577-7.599z'/%3E%3C/svg%3E");
  }

  &[data-theme="custom"]{
    --svgColor: 203 213 225;
    --pri: #1e293b;
    --sec: #334155;
    --priFntClr: #94a3b8;
    --secFntClr: 241 245 249;
    --highlightClr: 248 250 252;
    --bgImg: url("data:image/svg+xml,%3Csvg fill='%23cbd5e1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 256 157' xml:space='preserve'%3E%3Cpath d='m253.823 41.499-.325.734c-2.41 5.503-8.319 9.204-14.332 9.204h-16.73v3.936c0 19.682-8.442 43.562-31.479 50.726l-3.909 41.513c2.862 1.12 4.892 3.898 4.892 7.156h-11.96l-4.781-51.275-39-6.766c-10.755 13.121-27.175 23.474-44.585 26.549l-3.695 24.37a7.688 7.688 0 0 1 4.795 7.121H80.756l.001-44.671c10.414-6.433 18.847-17.179 20.897-29.737 0 0-43.871 42.034-56.708 49.933-5.012 3.084-10.609 4.676-16.121 4.676-6.622 0-13.123-2.296-18.348-7.06-9.654-8.802-11.272-23.402-3.78-34.105l.722-1.035c5.007 5.223 11.765 7.918 18.623 7.918 4.441 0 8.925-1.131 13.003-3.438 12.878-7.285 33.765-21.585 41.987-26.531 5.561-3.345 13.409-6.095 19.728-7.581 15.761-3.706 67.877-8.57 67.877-8.57L222.434 2.23v16.513l-.013-.001c-.027 0 .013.012.013.012v-.011c.079.006.411.059 1.616.298a20.138 20.138 0 0 1 12.227 7.723l5.686 7.642 10.742 4.341a2.066 2.066 0 0 1 1.118 2.752zm-102.139 63.907-13.191-2.288c-4.227 4.708-9.067 8.946-14.301 12.598l13.93 39.052h11.96c0-4.146-3.284-7.517-7.392-7.673l-5.613-27.44c5.53-3.983 10.341-8.859 14.607-14.249zm64.187 41.763-6.906-44.331c-3.616 3.299-8.228 6.044-12.473 7.63l13.996 44.3h11.96c-.001-3.868-2.859-7.059-6.577-7.599z'/%3E%3C/svg%3E");
  }

  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  perspective: 400px;
  transition: 1s;
  transition-timing-function: cubic-bezier(0.23, 1, 0.32, 1.2);

  :has(.search[data-state='searching']),
  :has(.search[data-state='result-found']){
    transform: translateY(-3rem);
  }

  .search label {
    position: relative;
    perspective: 400px;
  }

  .search label .search-svg-container {
    position: absolute;
    height: 1.5rem;
    width: 1.5rem;
    --tw-text-opacity: 1;
    color: rgb(var(--svgColor));
    top: 0;
    right: 1.25rem;
    pointer-events: none;
  }

  .search[data-state='searching'] .search-svg-container{
    animation: circle-anim 2s cubic-bezier(.25,0,.1,1) infinite;
  }

  .search button {
    height: 1.5rem;
    width: 1.5rem;
    --tw-text-opacity: 1;
    color: rgb(var(--svgColor) / var(--tw-text-opacity));
    display: none;
    position: absolute;
    top: 50%;
    right: 1rem;
    transform: translateY(-50%);
    cursor: pointer;
  }

  .search[data-state='result-found'] button{
    display: block;
  }

  .search .search-svg-container svg,
  .search button svg{
    filter: drop-shadow(-4px 4px 2px rgba(0, 0, 0, .4));
  }

  .search-results {
    position: absolute;
    top: 100%;
    width: 100%;
    border-radius: 0.5rem;
    padding: 0.625rem;
    top: calc(100% + .8rem);
    transform-origin: top center;
    transform: rotateX(-65deg);
    pointer-events: none;
    opacity: 0;
  }

  .search-results:has(li)::before{
    content: '';
    height: 0.75rem;
    width: 0.75rem;
    background: var(--pri);
    position: absolute;
    top: -.4rem;
    right: 1.5rem;
    transform: rotate(45deg);
    border-top-left-radius: .15rem;
    pointer-events: none;
  }

  .search-results:has(li){
    background: var(--pri);
    box-shadow: rgba(var(Bg), 0.4) 0px 2px 4px, rgba(var(--priBg), 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }

  [data-state='searching'] + .search-results,
  [data-state='result-found'] + .search-results{
    animation: flip 1s cubic-bezier(0.23, 1, 0.32, 1.2) .3s forwards;
  }

  [data-state='stop-searching'] + .search-results{
    opacity: 1;
    transform: rotateX(0);
    animation: flip-back .5s cubic-bezier(0,0,0,1) .3s forwards;
  }

  [data-state='result-found'] .search-svg-container{
    display: none;
  }

  .search-results ul {
    height: 100%;
    width: 100%;
    border-radius: 0.375rem;
  }

  .leading-loading {
    height: 3rem;
    min-height: 3rem;
    width: 3rem;
    min-width: 3rem;
    background-color: rgb(113 113 122 / 0.4);
  }

  .leading-loading,
  .leading {
    align-self: center;
    border-radius: 9999px;
  }

  .search-results ul {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .search-results ul li {
    display: flex;
    gap: 1.5rem;
    border-radius: 0.5rem;
    border-left-width: 1px;
    border-top-width: 1px;
    border-color: rgb(82 82 91 / 0.3);
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    background: var(--sec);
  }

  .search-results ul li:not(:has(:first-child)) {
    justify-content: center;
    text-align: center;
    --tw-text-opacity: 1;
    color: rgb(var(--svgColor) / var(--tw-text-opacity));
  }

  .search-results li.loading-li {
    gap: 0.75rem;
  }

  .content-loading {
    flex: 1 1 0%;
    display: grid;
    grid-template-columns: .5fr .2fr .3fr;
    -moz-column-gap: .25rem;
        column-gap: .25rem;
    align-items: center;
    justify-content: center;
  }

  .content-loading span:nth-of-type(3){
    grid-column: 1/4;
  }

  .search-results ul li.loading-li span {
    position: relative;
    height: 0.5rem;
    flex: 1 1 0%;
    align-items: center;
    overflow: hidden;
    border-radius: 0.75rem;
    background-color: rgb(113 113 122 / 0.4);
    --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
    --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
    box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
    transition: .3s;
  }

  .loading-li .leading-loading {
    position: relative;
    overflow: hidden;
    transform: skewX(0deg);
  }

  .search-results ul li.loading-li span::before{
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    --tw-bg-opacity: 1;
    background-color: rgb(113 113 122 / var(--tw-bg-opacity));
    filter: blur(10px);
  }

  @keyframes flip{
    to{
      transform: rotateX(0);
      opacity: 1;
      pointer-events: unset;
    }
  }

  @keyframes flip-back{
    to{
      transform: rotateX(-65deg);
      opacity: 0;
      pointer-events: none;
    }
  }

  @keyframes circle-anim {
    0%{
      transform:rotate(0deg) translate(.25rem) rotate(0deg);
    }

    100%{
      transform:rotate(360deg) translate(.25rem) rotate(-360deg);
    }
  }

  .search input {
    height: 3rem;
    border-radius: 9999px;
    border-style: none;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-left: 1.5rem;
    padding-right: 3.5rem;
    letter-spacing: 0.05em;
    --tw-text-opacity: 1;
    color: rgb(var(--svgColor) / var(--tw-text-opacity));
    outline: 2px solid transparent;
    outline-offset: 2px;
    background: var(--pri);
    box-shadow: rgba(var(--priBg), 0.4) 0px 2px 4px, rgba(var(--priBg), 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }

  .search-results li .content {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    --tw-text-opacity: 1;
    color: rgb(var(--secFntClr) / var(--tw-text-opacity));
  }

  .search-results li .content p {
    font-size: 0.875rem;
    line-height: 1.5rem;
    letter-spacing: 0.05em;
  }

  .search-results li .content p span {
    --tw-bg-opacity: 1;
    background-color: rgb(var(--highlightClr) / var(--tw-bg-opacity));
    color: var(--sec);
    font-weight: 700;
  }

  .leading{
    position: relative;
    height: 2rem;
    min-height: 2rem;
    width: 2rem;
    min-width: 2rem;
    color: rgb(var(--svgColor));
    background-image: var(--bgImg);
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
    /* border: var(--testing); */
  }

  .leading::before {
    position: absolute;
    right: -.8rem;
    height: 100%;
    border-width: 1px;
    border-style: dashed;
    --tw-border-opacity: 1;
    border-color: rgb(113 113 122 / var(--tw-border-opacity));
    content: '';
    -webkit-mask-image: linear-gradient(to bottom, transparent , #000, transparent);
            mask-image: linear-gradient(to bottom, transparent , #000, transparent);
  }

  .leading svg {
    height: 100%;
    width: 100%;
  }
`;

const Search = (props) => {
  const theme = props.theme || 'dark';

  const componentRef = useRef(null);

  const searchResultsRef = useRef(null);

  const searchEleContainerRef = useRef(null);

  const [isLoading, setIsLoading] = useState(true);

  const [typedValue, setTypedValue] = useState("bro");

  const defaultTxt = "The quick brown fox jumps over the lazy dog";

  let debounceTimeout;

  const LoadingTemp = () => {
    return (
      <li className="loading-li" role="listitem">
        <div className="leading-loading animate-pulse" aria-hidden="true"></div>
        <div className="content-loading">
          <span aria-hidden="true" className="animate-pulse"></span>
          <span aria-hidden="true" className="animate-pulse"></span>
          <span aria-hidden="true" className="animate-pulse"></span>
        </div>
      </li>
    );
  };

  const SearchResult = () => {
    const matchFound = defaultTxt
      .toLowerCase()
      .includes(typedValue.toLowerCase());

    const startIndex = defaultTxt
      .toLowerCase()
      .indexOf(typedValue.toLowerCase());
    const endIndex = startIndex + typedValue.length;

    if (typedValue.trim().length > 0 && searchEleContainerRef.current) {
      searchEleContainerRef.current.setAttribute("data-state", "result-found");
    }

    useEffect(() => {
      if(componentRef.current) componentRef.current.style.opacity = 1;
    }, [componentRef.current]);

    return (
      <>
        {matchFound ? (
          <li role="listitem">
            <div className="leading"></div>
            <div className="content">
              <p>
                {defaultTxt.slice(0, startIndex)}
                <span>{defaultTxt.slice(startIndex, endIndex)}</span>
                {defaultTxt.slice(endIndex)}
              </p>
            </div>
          </li>
        ) : (
          <li role="listitem">No results found...</li>
        )}
      </>
    );
  };

  const searchInputEvent = (e) => {
    clearTimeout(debounceTimeout);

    const value = e.target.value.trim();

    setTypedValue(value);

    searchEleContainerRef.current.setAttribute(
      "data-state",
      value.length > 0 ? "searching" : "stop-searching"
    );

    if (value.length > 0) {
      debounceTimeout = setTimeout(() => {
        setIsLoading(false);
      }, 500);

      setIsLoading(true);
    }
  };

  const clearSearchBtn = () => {
    setIsLoading(false);
    setTypedValue("");
    searchEleContainerRef.current.setAttribute("data-state", "stop-searching");
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <SearchContainer data-theme={theme} ref={componentRef} style={{opacity: 0}} onClick={(e)=>e.stopPropagation()}>
        <div
          className="search"
          ref={searchEleContainerRef}
          data-state="searching"
        >
          <label htmlFor="search-input">
            <input
              type="text"
              placeholder="Search..."
              id="search-input"
              role="searchbox"
              aria-label="Search input"
              value={typedValue}
              onInput={searchInputEvent}
            />
            <button
              id="clear-search"
              aria-label="Clear search"
              onClick={clearSearchBtn}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="m16 8-8 8m4-4 4 4M8 8l2 2"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="search-svg-container">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                />
              </svg>
            </div>
          </label>
        </div>
        <div
          className="search-results"
          aria-live="polite"
          aria-label="Search results"
          ref={searchResultsRef}
        >
          <ul>{isLoading ? <LoadingTemp /> : <SearchResult />}</ul>
        </div>
    </SearchContainer>
  );
};

export default Search;
