import { format } from "date-fns";

/**
 *
 * @param {String} str is date in string
 * @param {String} type - 'yyyy.mm.dd'
 */
export function formatDate(str, type) {
    const date = new Date(str);

    return format(date, type);
}
