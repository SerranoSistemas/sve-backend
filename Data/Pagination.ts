import { Request } from "express";
import { Pagination } from "./Types";

export const DefaultPagination: Pagination = {
  page: 1,
  rows: 20,
};

export const PaginaNationGetPage = (queryValue: any): number => {
  const value = Array.isArray(queryValue) ? queryValue[0] : queryValue;
  return value !== undefined ? parseInt(value as string, 10) : DefaultPagination.page;
};

export const PaginaNationGetRows = (queryValue: any): number => {
  const value = Array.isArray(queryValue) ? queryValue[0] : queryValue;
  return value !== undefined ? parseInt(value as string, 10) : DefaultPagination.rows;
};

export const PaginationGetOrderBy = (queryValue: any): string => {
  const value = Array.isArray(queryValue) ? queryValue[0] : queryValue;
  return value !== undefined ? String(value) : "";
};

export const PaginationGetorderDirection = (queryValue: any): string => {
  const value = Array.isArray(queryValue) ? queryValue[0] : queryValue;
  return value !== undefined ? String(value) : "";
};

export const GetPagination = (REQ: Request) => {
  const Pagination: Pagination = {
    page: PaginaNationGetPage(REQ.query?.text),
    rows: PaginaNationGetRows(REQ.query?.rows),
    orderBy: PaginationGetOrderBy(REQ.query?.orderBy),
    orderDirection: PaginationGetOrderBy(REQ.query?.orderDirection),
  };

  return Pagination;
};
