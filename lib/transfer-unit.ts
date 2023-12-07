export function convertUnit(distanceInMeters: number): string {
    const distanceInKilometers = distanceInMeters / 1000;
    const formattedDistance = new Intl.NumberFormat('en-US', {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
    }).format(distanceInKilometers);
    return formattedDistance;
}
