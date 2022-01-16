def create_pdf(data):
    TIMES = ['9:00-11:00', '11:30-1:00', '1:30-3:30', '4:00-6:00', '6:30-8:00', '9:00-12:00']
    ACTIVITIES = ['activity1', 'lunch', 'activity2', 'activity3', 'dinner', 'night']
    DATE = '12/02/2023'
    count = 0
    
    itinerary = [
        ['Date', 'Time', 'Event Details']
    ]

    for item in data:
        for activ in ACTIVITIES:
            row = []
            row.append(DATE)
            row.append(TIMES[count%6])
            
            if activ is not None:
                details = str(item[activ])
                details = details.replace(',', '\n')
                row.append(details)
            else:
                row.append('')

            count += 1
            itinerary.append(row)
    

    filename = 'pdfTable.pdf'
    print("Running...")

    from reportlab.platypus import SimpleDocTemplate
    from reportlab.lib.pagesizes import letter

    pdf = SimpleDocTemplate(
        filename,
        pagesize=letter
    )

    from reportlab.platypus import Table
    table = Table(itinerary)

    from reportlab.platypus import TableStyle

    style = TableStyle([
        ('FONTSIZE', (0,0), (-1,0), 4)
    ])

    elems = []
    elems.append(table)

    pdf.build(elems)


if __name__ == "__main__":
    create_pdf(test_dict)
