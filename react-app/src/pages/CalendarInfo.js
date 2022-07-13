import React, { useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import moment from 'moment';
import { Link } from 'react-router-dom';
import WorkSetting from './WorkSetting';
import Modal from '../components/Modal';
import Schedule from './Schedule';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';

function WorkingPeriod(props) {
  return (
    <div>
      {moment(props.value).format('YYYY년 MM월 DD일')}부터{' '}
      {moment(props.value).add(1, 'months').format('YYYY년 MM월 DD일')}까지{' '}
      <span>상세 내역</span>
    </div>
  );
}

function WorkInfo(props) {
  const workInfo = props.data.map((info) => {
    return (
      <span key={info.id}>
        {info.content}
        <br />
      </span>
    );
  });
  return <div>{workInfo}</div>;
}

function CalendarInfo() {
  const [value, setValue] = useState(new Date());
  const [workModal, setWorkModal] = useState(true);
  const data = [
    {
      id: 1,
      date: '2022-07-15',
      title: '1.0',
      color: 'skyblue',
      contents: '태그, 메모',
    },
  ];
  function handleEventContent(eventInfo) {
    return (
      <>
        <b>{eventInfo.timeText}</b>
        <i>{eventInfo.event.title}</i>
      </>
    );
  }

  function handleDateClick(arg) {
    setValue(arg.dateStr);
  }
  const elements = [
    { id: 1, content: '총 공수' },
    { id: 2, content: '총 급여' },
    { id: 3, content: '총 근무일' },
  ];

  return (
    <div>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}
        events={data}
        editable={true}
        selectable={true}
        eventContent={handleEventContent}
      />
      <Schedule value={value} />
      <WorkingPeriod value={value} />
      <WorkInfo data={elements} />
      <Link to="/workTag">
        <button>근로태그</button>
      </Link>
      <button
        onClick={() => {
          setWorkModal(!workModal);
        }}
      >
        설정
      </button>
      {!workModal && (
        <Modal
          closeModal={() => {
            setWorkModal(!workModal);
          }}
        >
          <WorkSetting />
        </Modal>
      )}
    </div>
  );
}

export default CalendarInfo;
