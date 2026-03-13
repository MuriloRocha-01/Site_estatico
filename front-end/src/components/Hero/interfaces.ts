import type { ReactNode } from "react";

export interface HeroProps {
    imagem: string;
    label1: ReactNode;
    label2?: ReactNode;
}