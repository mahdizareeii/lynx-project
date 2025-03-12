export type UiState<DataType> =
    | { state: "initial" }
    | { state: "loading" }
    | { state: "success"; data: DataType }
    | { state: "error"; message: string }