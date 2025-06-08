import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';

const Calendar = () => (
    <div className="p-4">
        <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            events={[
                { title: 'Meeting', date: '2025-06-10' },
                { title: 'Product Launch', date: '2025-06-15' },
            ]}
        />
    </div>
);

export default Calendar;
