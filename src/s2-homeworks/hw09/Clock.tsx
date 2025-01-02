import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<number | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)

    const start = () => {

        if (timerId !== undefined) return;

        const id = setInterval(() => {
            setDate(new Date())
        }, 1000) as unknown as number

        setTimerId(id)
    }

    const stop = () => {

        if (timerId === undefined) return;

        clearInterval(timerId);
        setTimerId(undefined);

    }

    const onMouseEnter = () => {
        setShow(true)
    }
    const onMouseLeave = () => {
        setShow(false)
    }

    const stringTime = date.toLocaleTimeString('en-Us', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
    }) || '' // часы24:минуты:секунды (01:02:03)/(23:02:03)/(24:00:00)/(00:00:01) // пишут студенты

    const stringDate = date.toLocaleDateString('en-US', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    }) || ''// день.месяц.год (01.02.2022) // пишут студенты, варианты 01.02.0123/01.02.-123/01.02.12345 не рассматриваем

    // день недели на английском, месяц на английском (https://learn.javascript.ru/intl#intl-datetimeformat)
    const stringDay = date.toLocaleString('en-Us', {
        weekday: 'long'
    }) || ''  // пишут студенты
    const stringMonth = date.toLocaleString('en-Us', {
        month: 'long'
    }) || ''  // пишут студенты

    return (
      <div className={s.clock}>
          <div
            id={'hw9-watch'}
            className={s.watch}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
          >
              <span id={'hw9-day'}>{stringDay}</span>,{' '}
              <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
          </div>

          <div id={'hw9-more'}>
              <div className={s.more}>
                  {show ? (
                    <>
                        <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                        <span id={'hw9-date'}>{stringDate}</span>
                    </>
                  ) : (
                    <>
                        <br/>
                    </>
                  )}
              </div>
          </div>

          <div className={s.buttonsContainer}>
              <SuperButton
                id={'hw9-button-start'}
                disabled={timerId !== undefined} // пишут студенты // задизэйблить если таймер запущен
                onClick={start}
              >
                  start
              </SuperButton>
              <SuperButton
                id={'hw9-button-stop'}
                disabled={timerId === undefined} // пишут студенты // задизэйблить если таймер не запущен
                onClick={stop}
              >
                  stop
              </SuperButton>
          </div>
      </div>
    )
}

export default Clock
