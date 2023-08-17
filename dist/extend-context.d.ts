interface ExtendedContext extends CanvasRenderingContext2D {
    transformedPoint(x: number, y: number): DOMPoint;
    untransformedPoint(x: number, y: number): DOMPoint;
}
export type { ExtendedContext };
export declare function extendContext(ctx: CanvasRenderingContext2D | null): ExtendedContext | null;
//# sourceMappingURL=extend-context.d.ts.map