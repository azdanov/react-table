import { slice, take } from "lodash";

export default function pagination(items, pageNumber, pageSize) {
  const startIndex = (pageNumber - 1) * pageSize;
  return take(slice(items, startIndex), pageSize);
}
