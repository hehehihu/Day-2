import React, { useState } from 'react';
import './TipCalculator.scss';
import Logo from '../../assets/logo.svg';
import TipInputForm from './TipInputForm';
import TipResult from './TipResult';

function TipCalculator() {
  const [bill, setBill] = useState<number>(0);
  const [tipPercent, setTipPercent] = useState<number>(0);
  const [customTip, setCustomTip] = useState<number>(0);
  const [people, setPeople] = useState<number>(0);

  let tipAmountPerPerson = 0;
  let totalPerPerson = 0;

  if (bill > 0 && people > 0) {
    const finalTipPercent = customTip > 0 ? customTip : tipPercent;
    const tipValue = (bill * finalTipPercent) / 100;
    tipAmountPerPerson = tipValue / people;
    totalPerPerson = (bill + tipValue) / people;
  }

  const handleReset = () => {
    setBill(0);
    setTipPercent(0);
    setCustomTip(0);
    setPeople(0);
  };

  return (
    <div className="tip-calculator-container">
      <header className="header">
        <img src={Logo} alt="Splitter Logo" className="logo" />
      </header>
      <div className="calculator">
        <TipInputForm
          bill={bill}
          setBill={setBill}
          tipPercent={tipPercent}
          setTipPercent={setTipPercent}
          customTip={customTip}
          setCustomTip={setCustomTip}
          people={people}
          setPeople={setPeople}
        />

        <TipResult
          tipAmountPerPerson={tipAmountPerPerson}
          totalPerPerson={totalPerPerson}
          onReset={handleReset}
        />
      </div>
    </div>
  );
}

export default TipCalculator;
