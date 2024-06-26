import './TogglingSidebar.css';
import { useEffect, useRef } from 'react';

const TogglingSidebar = () => {
    const navigationRef = useRef(null);

    useEffect(()=>{
        if(navigationRef.current){
            const svgs = navigationRef.current.querySelectorAll('svg');

            svgs.forEach(svg => {
                const animatablePaths = Array.from(svg.querySelectorAll('path'));
                const animatableCircles = Array.from(svg.querySelectorAll('circle'));

                const animatables = [...animatablePaths, ...animatableCircles];

                animatables.forEach(animatable => {
                    const totalLength = animatable.getTotalLength();

                    animatable.style.setProperty('--thisLength', totalLength);
                });
            });
        }
    }, []);

    return(
        <nav className="toggling-navigation rounded-lg" ref={navigationRef}>
            <div className="ul-wrapper rounded-lg">
                <button aria-label="Toggle Navigation" onClick={() => navigationRef.current.classList.toggle('active')}>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.5 17a1 1 0 0 0 1.707.707l5-5a1 1 0 0 0 0-1.414l-5-5A1 1 0 0 0 8.5 7v10Z" fill="currentColor"/>
                    </svg>
                </button>
                <ul>
                    <li>
                        <a>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g stroke="currentColor" strokeWidth="1.5">
                                    <path d="M2.364 12.958c-.38-2.637-.57-3.956-.029-5.083.54-1.127 1.691-1.813 3.992-3.183l1.385-.825C9.8 2.622 10.846 2 12 2c1.154 0 2.199.622 4.288 1.867l1.385.825c2.3 1.37 3.451 2.056 3.992 3.183.54 1.127.35 2.446-.03 5.083l-.278 1.937c-.487 3.388-.731 5.081-1.906 6.093C18.276 22 16.553 22 13.106 22h-2.212c-3.447 0-5.17 0-6.345-1.012-1.175-1.012-1.419-2.705-1.906-6.093l-.279-1.937Z"/>
                                    <path d="M15 18H9" strokeLinecap="round"/>
                                </g>
                            </svg>
                            <span  data-txt="Home">Home</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g stroke="currentColor" strokeWidth="1.5">
                                    <path d="M3 12c0 3.771 0 7.657 1.318 8.828C5.636 22 7.758 22 12 22c4.243 0 6.364 0 7.682-1.172C21 19.657 21 15.771 21 12"/>
                                    <path d="m14.66 14.202 6.008-1.802c.595-.179.893-.268 1.082-.482a.996.996 0 0 0 .1-.134c.15-.243.15-.553.15-1.175 0-2.45 0-3.675-.673-4.502a2.997 2.997 0 0 0-.434-.434C20.066 5 18.841 5 16.391 5H7.61c-2.45 0-3.675 0-4.502.673-.16.13-.305.275-.434.434C2 6.934 2 8.159 2 10.609c0 .622 0 .932.15 1.175.03.047.063.092.1.134.19.214.487.303 1.082.482l6.008 1.802M6.5 5c.823-.02 1.66-.545 1.94-1.32l.035-.103L8.5 3.5c.042-.127.064-.19.086-.246a2 2 0 0 1 1.735-1.25C10.38 2 10.448 2 10.58 2h2.838c.133 0 .2 0 .26.004a2 2 0 0 1 1.735 1.25c.023.056.044.12.086.246l.026.077c.018.053.026.08.035.103.28.775 1.116 1.3 1.939 1.32"/>
                                    <path d="M14 12.5h-4a.5.5 0 0 0-.5.5v2.162a.5.5 0 0 0 .314.464l.7.28a4 4 0 0 0 2.972 0l.7-.28a.5.5 0 0 0 .314-.464V13a.5.5 0 0 0-.5-.5Z" strokeLinecap="round"/>
                                </g>
                            </svg>
                            <span data-txt="My Works">My Works</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2c4.714 0 7.071 0 8.535 1.464C22 4.93 22 7.286 22 12c0 4.714 0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z" stroke="currentColor" strokeWidth="1.5"/>
                                <path d="M10.125 8.875a1.875 1.875 0 1 1 2.828 1.615c-.475.281-.953.708-.953 1.26V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                                <circle cx="12" cy="16" r="1" fill="currentColor"/></svg>
                            <span data-txt="Why Me?">Why Me?</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g stroke="currentColor" strokeWidth="1.5">
                                    <path d="M8 13h8m-8 0v5c0 1.886 0 2.828.586 3.414C9.172 22 10.114 22 12 22c1.886 0 2.828 0 3.414-.586C16 20.828 16 19.886 16 18v-5m-8 0a7.459 7.459 0 0 1-5.618-5.472L2 6m14 7c1.71 0 3.15 1.28 3.35 2.98L20 21.5" strokeLinecap="round"/>
                                    <circle cx="12" cy="6" r="4"/>
                                </g>
                            </svg>
                            <span data-txt="About Me">About Me</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g stroke="currentColor" strokeWidth="1.5">
                                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12c0 1.6.376 3.112 1.043 4.453.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.591l2.226-.595a1.634 1.634 0 0 1 1.149.133A9.958 9.958 0 0 0 12 22Z"/>
                                    <path d="M8 10.5h8M8 14h5.5" strokeLinecap="round"/>
                                </g>
                            </svg>
                            <span data-txt="Contact Me">Contact Me</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default TogglingSidebar;