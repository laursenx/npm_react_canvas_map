import React from "react";
import type { Coords } from "./types";
type MapProps = {
    image: string;
    children?: React.ReactNode;
    onClick?(pt: Coords): void;
    onDoubleClick?(pt: Coords): void;
    onCursorMove?(pt: Coords): void;
    minZoom?: number;
    maxZoom?: number;
    overpan?: number;
    minDragTime?: number;
    clickGraceTime?: number;
    containInitialImage?: boolean;
    containUpdatedImage?: boolean;
    allowContainmentZoom?: boolean;
    panTo?: Coords;
};
declare const Map: React.ForwardRefExoticComponent<MapProps & React.RefAttributes<HTMLCanvasElement>>;
export { Map };
export type { MapProps };
//# sourceMappingURL=map.d.ts.map