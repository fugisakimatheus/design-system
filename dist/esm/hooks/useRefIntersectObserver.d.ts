/// <reference types="react" />
export declare const useRefIntersectObserver: <T extends HTMLElement>(callback: (entry: IntersectionObserverEntry) => void, init?: IntersectionObserverInit) => import("react").MutableRefObject<T | null>;
