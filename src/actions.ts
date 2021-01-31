interface UpdateFormId {
  type: 'UPDATE_ID',
  payload: { id: string }
}

interface UpdateFormName {
  type: 'UPDATE_NAME',
  payload: { name: string }
}

export type ActionType = UpdateFormId | UpdateFormName;

export const updateFormId = (id: string) => {
  return {
      type: 'UPDATE_ID',
      payload: { id }
  };
}
export const updateFormName = (name: string) => {
  return {
      type: 'UPDATE_NAME',
      payload: { name }
  };
}
