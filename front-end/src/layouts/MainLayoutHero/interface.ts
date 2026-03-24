import type { ReactNode } from "react";

export interface MainLayoutHeroProps{
    children:React.ReactNode;
    imagem:string;
    label1:ReactNode;
    label2?:ReactNode;
}