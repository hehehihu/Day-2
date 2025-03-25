import React from 'react';
import './TipResult.scss';

type TipResultProps = {
  tipAmountPerPerson: number;
  totalPerPerson: number;
  onReset: () => void;
};

const TipResult: React.FC<TipResultProps> = ({
  tipAmountPerPerson,
  totalPerPerson,
  onReset,
}) => {
  return (
    <div className="tip-result">
      <div className="result-row">
        <div className="result-label">
          <p>Tip Amount</p>
          <span>/ person</span>
        </div>
        <p className="result-value">${tipAmountPerPerson.toFixed(2)}</p>
      </div>

      <div className="result-row">
        <div className="result-label">
          <p>Total</p>
          <span>/ person</span>
        </div>
        <p className="result-value">${totalPerPerson.toFixed(2)}</p>
      </div>

      <button
        className="reset-btn"
        onClick={onReset}
      >
        RESET
      </button>
    </div>
  );
};

export default TipResult;
