import { DecisionState } from '../../utils/functionInit';

export function validateUserInput(value: string) {
  if (value.length === 0) {
    return [];
  }
  const itemsList = value.split('\n');
  const storedState = localStorage.getItem('decisionState');
  let defaultState: DecisionState;
  if (storedState) {
    defaultState = JSON.parse(storedState);
  } else {
    defaultState = {
      optionsList: {
        list: {},
        lastId: 0,
      },
    };
  }
  const newItems = itemsList
    .map((item) => {
      if (!item.includes(',')) {
        return undefined;
      }
      const lastComa = item.lastIndexOf(',');
      const title = item.substring(0, lastComa).trim();
      const weightPart = item.substring(lastComa + 1).trim();
      if (weightPart && isNaN(Number(weightPart))) {
        return undefined;
      }
      const weight = weightPart || '';
      const newId = `${defaultState.optionsList.lastId + 1}`;
      defaultState.optionsList.lastId += 1;
      return {
        id: newId,
        title: title,
        weight: weight,
      };
    })
    .filter((item) => item !== undefined);
  newItems.forEach((item) => {
    if (item) {
      defaultState.optionsList.list[item.id] = item;
    }
  });

  localStorage.setItem('decisionState', JSON.stringify(defaultState));

  return newItems;
}
