export interface PaginationProps {
  totalCountOfRegisters: number
  registerPerPage?: number
  currentPage?: number
  onPageChange: (pageNumber: number) => void
}

export interface PaginationItemProps {
  pageNumber: number
  isCurrent?: boolean
  onPageChange: (pageNumber: number) => void
}
