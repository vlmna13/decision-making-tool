import { createElement } from '../../utils/createElement';
import { DecisionState } from '../../utils/functionInit';
import { clearList } from './functionClearList';
import { createTaskWrapper } from './homeComponents/taskWrapper';

export function loadFile(taskWrapper: HTMLUListElement): void {
  const input = createElement<HTMLInputElement>({
    tag: 'input',
  });
  input.type = 'file';
  input.accept = 'application/json';
  input.addEventListener('change', (event) => {
    const target = event.target;
    if (target instanceof HTMLInputElement && target.files) {
      const file = target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          if (e.target && typeof e.target.result === 'string') {
            try {
              const jsonData: DecisionState = JSON.parse(e.target.result);
              clearList(taskWrapper);
              localStorage.removeItem('decisionState');
              localStorage.setItem('decisionState', JSON.stringify(jsonData));

              Object.values(jsonData.optionsList.list).forEach((task) => {
                const taskWrapperElement = createTaskWrapper(task);
                taskWrapper.appendChild(taskWrapperElement);
              });
            } catch (error) {
              console.error('Error parsing JSON:', error);
            }
          } else {
            console.error('File reading error');
          }
        };
        reader.readAsText(file);
      }
    }
  });

  input.click();
}
