"use client";

import { Container } from "postcss";
import ContainerMain from "./containers/ContainerMain";

const SkeletonLoaderTable = () => {
    return (
        <ContainerMain>
            <div className="animate-pulse">
                <div className="h-10 bg-gray-200 rounded w-full mb-4"></div>
                <div className="h-10 bg-gray-200 rounded w-full mb-4"></div>
                <div className="space-y-2">
                    {[...Array(15)].map((_, i) => (
                        <div key={i} className="flex space-x-4">
                            <div className="h-8 bg-gray-200 rounded w-full"></div>
                        </div>
                    ))}
                </div>
            </div>
        </ContainerMain>
    );
}
export default SkeletonLoaderTable;