export default interface StrapiResponse<T> {
  data: T,
  meta: {
    pagination?: {
      page: number,
      pageSize: number,
      pageCount: number,
      total: number
    }
  }
}