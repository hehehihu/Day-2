import React from 'react';
import './TipInputForm.scss';
import IconDollar from '../../assets/icon-dollar.svg';
import IconPerson from '../../assets/icon-person.svg';

type TipInputFormProps = {
  bill: number;
  setBill: React.Dispatch<React.SetStateAction<number>>;
  tipPercent: number;
  setTipPercent: React.Dispatch<React.SetStateAction<number>>;
  customTip: number;
  setCustomTip: React.Dispatch<React.SetStateAction<number>>;
  people: number;
  setPeople: React.Dispatch<React.SetStateAction<number>>;
};

const TipInputForm: React.FC<TipInputFormProps> = ({
  bill,
  setBill,
  tipPercent,
  setTipPercent,
  customTip,
  setCustomTip,
  people,
  setPeople,
}) => {
  const tipOptions = [5, 10, 15, 25, 50];

  const handleSelectTip = (percent: number) => {
    setTipPercent(percent);
    setCustomTip(0);
  };

  return (
    <div className="tip-input-form">
      <label htmlFor="bill-input" className="label">
        Bill
      </label>
      <div className="input-wrapper">
        <img src={IconDollar} alt="Dollar Icon" />
        <input
          id="bill-input"
          type="number"
          min="0"
          placeholder="0"
          value={bill === 0 ? '' : bill} 
          onChange={(e) => {
            const value = Number(e.target.value);
            setBill(value >= 0 ? value : 0);
          }}
        />
      </div>

      <p className="label">Select Tip %</p>
      <div className="tip-buttons">
        {tipOptions.map((option) => (
          <button
            key={option}
            className={tipPercent === option ? 'active' : ''}
            onClick={() => handleSelectTip(option)}
          >
            {option}%
          </button>
        ))}
        
        <input
          type="number"
          min="0"          
          placeholder="Custom"
          value={customTip === 0 ? '' : customTip}
          onChange={(e) => {
            const value = Number(e.target.value);
            setCustomTip(value >= 0 ? value : 0);
            setTipPercent(0);
          }}
        />
      </div>

      <label htmlFor="people-input" className="label">
        Number of People
      </label>
      <div className="input-wrapper">
        <img src={IconPerson} alt="Person Icon" />
        <input
          id="people-input"
          type="number"
          min="1"          
          placeholder="0"
          value={people === 0 ? '' : people}
          onChange={(e) => {
            const value = parseInt(e.target.value, 10);
            setPeople(value > 0 ? value : 0);
          }}
        />
      </div>
    </div>
  );
};

export default TipInputForm;
