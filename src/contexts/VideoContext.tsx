import React, { createContext, useState, ReactNode } from 'react';

type VideoContextType = {
    isPlaying: boolean;
    setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
};

export const VideoContext = createContext<VideoContextType>({
    isPlaying: false,
    setIsPlaying: () => {},
});

type VideoProviderProps = {
    children: ReactNode;
};

export const VideoProvider = ({ children }: VideoProviderProps) => {
    const [isPlaying, setIsPlaying] = useState(false);

    return (
        <VideoContext.Provider value={{ isPlaying, setIsPlaying }}>
            {children}
        </VideoContext.Provider>
    );
};