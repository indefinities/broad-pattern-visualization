import {tissueInformation} from "../../data/data-export.js";

function getColors() {
    const tissues = tissueInformation.tissueInfo;
    const entries = tissues.map((t) => [t.tissueSiteDetailId, t.colorHex]);
    return entries.map(([key, value]) => {
        return {
            name: key.replaceAll('_', ' '),
            hex: value,
        }
    });
}
const colorHexes = getColors();
Object.freeze(colorHexes);
export {
    colorHexes,
};