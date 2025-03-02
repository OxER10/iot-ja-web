// Fetch all Finnish public holidays for 2024
fetch('https://date.nager.at/api/v3/PublicHolidays/2024/fi')
  .then(response => response.json())
  .then(data => {
    /* 
    Checked the keys with console log.
    console.log(data);
    */

    // Display the date and name of each holiday with keys
    data.forEach(holiday => {
      console.log(`${holiday.date} : ${holiday.localName} / ${holiday.name}`);
    });
  }
)

// Output:
// 2024-01-01 : Uudenvuodenpäivä / New Year's Day
// 2024-01-06 : Loppiainen / Epiphany
// 2024-03-29 : Pitkäperjantai / Good Friday
// 2024-03-31 : Pääsiäispäivä / Easter Sunday
// 2024-04-01 : Toinen pääsiäispäivä / Easter Monday
// 2024-05-01 : Vappu / May Day
// 2024-05-09 : Helatorstai / Ascension Day
// 2024-05-19 : Helluntaipäivä / Pentecost
// 2024-06-21 : Juhannusaatto / Midsummer Eve
// 2024-06-22 : Juhannuspäivä / Midsummer Day
// 2024-11-02 : Pyhäinpäivä / All Saints' Day
// 2024-12-06 : Itsenäisyyspäivä / Independence Day
// 2024-12-24 : Jouluaatto / Christmas Eve
// 2024-12-25 : Joulupäivä / Christmas Day
// 2024-12-26 : Tapaninpäivä / St. Stephen's Day