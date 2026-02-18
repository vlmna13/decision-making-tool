import { DecisionState } from '../../utils/functionInit';

export function saveFile() {
  const stringData = localStorage.getItem('decisionState');
  if (!stringData) {
    return;
  }
  const data: DecisionState = JSON.parse(stringData);
  const jsonString = JSON.stringify(data, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const anchorElement = document.createElement('a');
  anchorElement.href = url;
  anchorElement.download = 'decisionState.json';
  document.body.appendChild(anchorElement);
  anchorElement.click();
  document.body.removeChild(anchorElement);
  URL.revokeObjectURL(url);
}
