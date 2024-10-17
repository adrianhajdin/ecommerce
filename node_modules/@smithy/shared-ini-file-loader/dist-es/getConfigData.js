import { IniSectionType } from "@smithy/types";
import { CONFIG_PREFIX_SEPARATOR } from "./loadSharedConfigFiles";
export const getConfigData = (data) => Object.entries(data)
    .filter(([key]) => {
    const sections = key.split(CONFIG_PREFIX_SEPARATOR);
    if (sections.length === 2 && Object.values(IniSectionType).includes(sections[0])) {
        return true;
    }
    return false;
})
    .reduce((acc, [key, value]) => {
    const updatedKey = key.startsWith(IniSectionType.PROFILE) ? key.split(CONFIG_PREFIX_SEPARATOR)[1] : key;
    acc[updatedKey] = value;
    return acc;
}, {
    ...(data.default && { default: data.default }),
});
