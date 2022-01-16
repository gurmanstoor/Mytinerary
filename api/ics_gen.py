from icalendar import Calendar, Event
import pytz
from datetime import datetime
import os
from pathlib import Path

def create_ics(data):
    #times are in UTC
    TIMES_START_HOUR = [17, 19, 21, 0, 2, 5]
    TIMES_START_MINUTE = [0, 30, 30, 0, 30, 0]
    TIMES_END_HOUR = [19, 21, 23, 3, 5, 9]
    TIMES_END_MINUTE = [0, 0, 30, 0, 0, 0]
    ACTIVITIES = ['activity1', 'lunch', 'activity2', 'activity3', 'dinner', 'night']
    DATE = '12/02/2023'
    count = 0
    day = 0

    cal = Calendar()
    for item in data:
        for activ in ACTIVITIES:
            if item[activ] is None:
                break
            else:
                details = item[activ]
                location = details["location"]
                name = details["name"]
                
                event = Event()
                event.add('summary', name)
                event.add('location', location)
                event.add('dtstart', datetime(2022, 10, 12+day, TIMES_START_HOUR[count%6], TIMES_END_MINUTE[count%6], 0, tzinfo=pytz.utc))
                event.add('dtend', datetime(2022, 10, 12+day, TIMES_END_HOUR[count%6], TIMES_END_MINUTE[count%6], 0, tzinfo=pytz.utc))
                event.add('dtstamp', datetime(2022, 1, 12+day, 0, 10, 0, tzinfo=pytz.utc))
                cal.add_component(event)
                
                count += 1
                if count % 6 == 0:
                    day += 1
    

    directory = str(Path(__file__).parent.parent) + "/"
    print(directory)
    f = open(os.path.join(directory, 'example.ics'), 'wb')
    f.write(cal.to_ical())
    f.close()

if __name__ == "__main__":
    create_ics()
