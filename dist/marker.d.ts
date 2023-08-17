import React from 'react';
import type { Coords } from './types';
type MarkerProps = {
    markerKey: string;
    coords: Coords;
    image: HTMLImageElement;
    inCircle?: boolean;
    circleColour?: string;
    size?: number;
    scaleWithZoom?: boolean;
    onClick?(): void;
    onDoubleClick?(): void;
    dragZoneScale?: number;
    onDragTick?(coords: Coords): void;
    onDragEnd?(coords: Coords): void;
    onDragCancel?(): void;
};
declare const Marker: React.FC<MarkerProps>;
export { Marker };
export type { MarkerProps };
//# sourceMappingURL=marker.d.ts.map