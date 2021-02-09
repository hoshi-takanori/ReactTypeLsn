// type の型の、type: 'UPDATE_ID' とか type: 'UPDATE_NAME' というのは、どちらも単なる文字列ではなく、'UPDATE_ID' や 'UPDATE_NAME' という具体的な値しか許さない型という意味。これをリテラル型と言う。
interface UpdateFormId {
  type: 'UPDATE_ID',
  payload: { id: string }
}

interface UpdateFormName {
  type: 'UPDATE_NAME',
  payload: { name: string }
}

interface SaveItem {
  type: 'SAVE_ITEM'
}

// union 型と言って、ActionType 型の値は UpdateFormId 型の値か、UpdateFormName 型の値のどちらかになるということ
export type ActionType = UpdateFormId | UpdateFormName | SaveItem;

export const updateFormId = (id:string) => {
  return {
      type: 'UPDATE_ID',
      payload: { id }
  };
}

export const updateFormName = (name:string) => {
  return {
      type: 'UPDATE_NAME',
      payload: { name }
  };
}

export const saveItem = () => {
  return {
    type: 'SAVE_ITEM'
  };
}
