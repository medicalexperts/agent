export enum GoogleSheetsFormatType {
  EFFECTIVE_VALUE = 'EFFECTIVE_VALUE',
  USER_ENTERED_VALUE = 'USER_ENTERED_VALUE',
  FORMATTED_VALUE = 'FORMATTED_VALUE'
}

export enum GoogleSheetsActionType {
  CREATE_WORKSHEET = 'CREATE_WORKSHEET',
  READ_SPREADSHEET = 'READ_SPREADSHEET',
  READ_SPREADSHEET_RANGE = 'READ_SPREADSHEET_RANGE',
  APPEND_SPREADSHEET = 'APPEND_SPREADSHEET',
  CREATE_SPREADSHEET_ROWS = 'CREATE_SPREADSHEET_ROWS',
  CLEAR_SPREADSHEET = 'CLEAR_SPREADSHEET'
}

export enum GoogleSheetsDestinationType {
  ROW_NUMBER = 'ROW_NUMBER',
  APPEND = 'APPEND'
}
