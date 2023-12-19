export function convertUnit(distanceInMeters: number): string {
    return (distanceInMeters / 1000).toFixed(1).toString();
}
