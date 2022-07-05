export interface PaginationProps {
  totalCountOfRegisters: number
  registerPerPage?: number
  currentPage?: number
  onPageChange: (page: number) => void
}

export interface PaginationItemProps {
  pageNumber: number
  isCurrent?: boolean
  onPageChange: (page: number) => void
}
