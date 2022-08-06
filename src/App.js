import React, {useState} from 'react';
import BpkButton from 'bpk-component-button';
import BpkText from 'bpk-component-text';
import BpkCalendar, {CALENDAR_SELECTION_TYPE} from 'bpk-component-calendar';
import format from 'date-fns/format';

import STYLES from './App.scss';

const c = className => STYLES[className] || 'UNKNOWN';

const App = () => {
  const [selectionConfiguration, setSC] = useState(
    {
      type: CALENDAR_SELECTION_TYPE.single,
      date: null,
    }
  )

  const handleDateSelect = (date) => {
    setSC(
      {
        type: selectionConfiguration.type,
        date: date,
      },
    );
  }

  const formatDateFull = date => format(date, 'EEEE, do MMMM yyyy');
  const formatMonth = date => format(date, 'MMMM yyyy');
  const daysOfWeek = [
    {
      name: 'Sunday',
      nameAbbr: 'Sun',
      index: 0,
      isWeekend: true,
    },
    // ...
  ];
  return (
    <div className={c('App')}>
      <header className={c('App__header')}>
        <div className={c('App__header-inner')}>
          <BpkText tagName="h1" textStyle="xxl" className={c('App__heading')}>Flight Schedule</BpkText>
        </div>
      </header>
      <main className={c('App__main')}>
        <BpkCalendar
            id='calendar'
            onDateSelect={handleDateSelect}
            formatMonth={formatMonth}
            formatDateFull={formatDateFull}
            daysOfWeek={daysOfWeek}
            weekStartsOn={1}
            changeMonthLabel="Change month"
            nextMonthLabel="Next month"
            previousMonthLabel="Previous month"
            selectionConfiguration={selectionConfiguration}
          />
      </main>
    </div>
  )
};

export default App;