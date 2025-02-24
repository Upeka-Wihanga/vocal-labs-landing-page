import React, { createContext, useState, ReactNode } from 'react';

type VideoContextType = {
    isPlaying: boolean;
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
    autoPlay: boolean;
    setAutoPlay: React.Dispatch<React.SetStateAction<boolean>>;
};

export const VideoContext = createContext<VideoContextType>({
    isPlaying: false,
    setIsPlaying: () => {},
    autoPlay: false,
    setAutoPlay: () => {},
});

type VideoProviderProps = {
    children: ReactNode;
};

export const VideoProvider = ({ children }: VideoProviderProps) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [autoPlay, setAutoPlay] = useState(false);

    return (
        <VideoContext.Provider value={{ isPlaying, setIsPlaying, autoPlay, setAutoPlay }}>
            {children}
        </VideoContext.Provider>
    );
};