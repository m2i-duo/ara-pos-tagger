"use client"
import React, { createContext, useContext, useState, ReactNode } from 'react';
import {Model, SaveFormat, TaggedWord} from "@/lib/types";

type PosTaggerContextType = {
    sentence: string;
    model: Model;
    taggedOutput: TaggedWord[];
    saveFormat: SaveFormat;
    setSentence: (sentence: string) => void;
    setModel: (model: Model) => void;
    setTaggedOutput: (taggedOutput: TaggedWord[]) => void;
    setSaveFormat: (saveFormat: SaveFormat) => void;
};

const PosTaggerContext = createContext<PosTaggerContextType | undefined>(undefined);

export const PosTaggerProvider = ({ children }: { children: ReactNode }) => {
    const [sentence, setSentence] = useState<string>('');
    const [model, setModel] = useState<Model>('HMM');
    const [taggedOutput, setTaggedOutput] = useState<TaggedWord[]>([]);
    const [saveFormat, setSaveFormat] = useState<SaveFormat>('json');

    return (
        <PosTaggerContext.Provider value={{ sentence, model, taggedOutput, saveFormat, setSentence, setModel, setTaggedOutput, setSaveFormat }}>
            {children}
        </PosTaggerContext.Provider>
    );
};

export const usePosTagger = () => {
    const context = useContext(PosTaggerContext);
    if (!context) {
        throw new Error('usePosTagger must be used within a PosTaggerProvider');
    }
    return context;
};