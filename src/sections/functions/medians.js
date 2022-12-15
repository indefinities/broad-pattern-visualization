import { ptenGeneExp } from "../../data/data-export.js";

/**
 * Retrieves all the samples from corresponding tissues.
 * @returns {*[]}
 */
function parseData() {
    const geneExpr = ptenGeneExp.geneExpression;
    const entries = geneExpr.map((g) => [g.tissueSiteDetailId, g.data]);
    const samples = [];
    const tissues = [];
    for (const [key, value] of entries) {
        if (tissues.length > 0 && tissues.includes(key)) {
            samples[tissues.indexOf(key)][1].push(value);
        } else {
            tissues.push(key);
            samples.push([key, [value]]);
        }
    }
    return samples;
}

/**
 * Finds median sample within tissues
 * @returns {{[p: string]: any}}
 */
function getMedians() {
    const samples = parseData();
    return samples.map(([key, value]) => {
        return {
            name: key.replaceAll('_', ' '),
            median: value[Math.round(value.length / 2)],
        }
    });
}

const medians = getMedians();
Object.freeze(medians);
export {
    medians,
};

