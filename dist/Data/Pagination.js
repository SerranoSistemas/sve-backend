"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GetPagination = exports.PaginationGetorderDirection = exports.PaginationGetOrderBy = exports.PaginaNationGetRows = exports.PaginaNationGetPage = exports.DefaultPagination = void 0;
exports.DefaultPagination = {
    page: 1,
    rows: 20,
};
const PaginaNationGetPage = (queryValue) => {
    const value = Array.isArray(queryValue) ? queryValue[0] : queryValue;
    return value !== undefined ? parseInt(value, 10) : exports.DefaultPagination.page;
};
exports.PaginaNationGetPage = PaginaNationGetPage;
const PaginaNationGetRows = (queryValue) => {
    const value = Array.isArray(queryValue) ? queryValue[0] : queryValue;
    return value !== undefined ? parseInt(value, 10) : exports.DefaultPagination.rows;
};
exports.PaginaNationGetRows = PaginaNationGetRows;
const PaginationGetOrderBy = (queryValue) => {
    const value = Array.isArray(queryValue) ? queryValue[0] : queryValue;
    return value !== undefined ? String(value) : "";
};
exports.PaginationGetOrderBy = PaginationGetOrderBy;
const PaginationGetorderDirection = (queryValue) => {
    const value = Array.isArray(queryValue) ? queryValue[0] : queryValue;
    return value !== undefined ? String(value) : "";
};
exports.PaginationGetorderDirection = PaginationGetorderDirection;
const GetPagination = (REQ) => {
    const Pagination = {
        page: (0, exports.PaginaNationGetPage)(REQ.query?.page),
        rows: (0, exports.PaginaNationGetRows)(REQ.query?.rows),
        orderBy: (0, exports.PaginationGetOrderBy)(REQ.query?.orderBy),
        orderDirection: (0, exports.PaginationGetOrderBy)(REQ.query?.orderDirection),
    };
    return Pagination;
};
exports.GetPagination = GetPagination;
