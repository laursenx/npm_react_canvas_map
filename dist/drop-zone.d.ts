import React from 'react';
type DropZoneProps = {
    right?: number;
    left?: number;
    top?: number;
    bottom?: number;
    width: number;
    height: number;
    label?: string;
    colour?: string;
    backgroundColour?: string;
    fontSize?: number;
    image?: HTMLImageElement;
    onDrop(markerKey: string): void;
};
declare const DropZone: React.FC<DropZoneProps>;
export { DropZone };
export type { DropZoneProps };
//# sourceMappingURL=drop-zone.d.ts.map