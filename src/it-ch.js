const locale = {
  code: "it-ch",
  engName: "Italian (Switzerland)",
  nativeName: "italiano (Svizzera)",
  dateTimeLocale: {
    eras: ["aC", "dC"],
    eraNames: ["a.C.", "d.C."],
    narrowMonths: ["G", "F", "M", "A", "M", "G", "L", "A", "S", "O", "N", "D"],
    standaloneNarrowMonths: [
      "G",
      "F",
      "M",
      "A",
      "M",
      "G",
      "L",
      "A",
      "S",
      "O",
      "N",
      "D"
    ],
    months: [
      "gennaio",
      "febbraio",
      "marzo",
      "aprile",
      "maggio",
      "giugno",
      "luglio",
      "agosto",
      "settembre",
      "ottobre",
      "novembre",
      "dicembre"
    ],
    standaloneMonths: [
      "Gennaio",
      "Febbraio",
      "Marzo",
      "Aprile",
      "Maggio",
      "Giugno",
      "Luglio",
      "Agosto",
      "Settembre",
      "Ottobre",
      "Novembre",
      "Dicembre"
    ],
    shortMonths: [
      "gen",
      "feb",
      "mar",
      "apr",
      "mag",
      "giu",
      "lug",
      "ago",
      "set",
      "ott",
      "nov",
      "dic"
    ],
    standaloneShortMonths: [
      "gen",
      "feb",
      "mar",
      "apr",
      "mag",
      "giu",
      "lug",
      "ago",
      "set",
      "ott",
      "nov",
      "dic"
    ],
    weekdays: [
      "domenica",
      "lunedì",
      "martedì",
      "mercoledì",
      "giovedì",
      "venerdì",
      "sabato"
    ],
    standaloneWeekdays: [
      "Domenica",
      "Lunedì",
      "Martedì",
      "Mercoledì",
      "Giovedì",
      "Venerdì",
      "Sabato"
    ],
    shortWeekdays: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
    standaloneShortWeekdays: ["dom", "lun", "mar", "mer", "gio", "ven", "sab"],
    narrowWeekdays: ["D", "L", "M", "M", "G", "V", "S"],
    standaloneNarrowWeekdays: ["D", "L", "M", "M", "G", "V", "S"],
    shortQuarters: ["T1", "T2", "T3", "T4"],
    quarters: ["1º trimestre", "2º trimestre", "3º trimestre", "4º trimestre"],
    ampms: ["AM", "PM"],
    firstDayOfWeek: 0,
    weekendRange: [5, 6],
    firstWeekCutOffDay: 3,
    dateFormat: "d-MMM-y",
    timeFormat: "HH:mm:ss",
    dateTimeFormat: "d-MMM-y HH:mm:ss",
    formats: {
      full_year: "yyyy",
      full_year_semester: "MMM yyyy",
      full_year_quarter: "MMM yyyy",
      full_year_month: "MMM yyyy",
      full_year_third_of_month: "dd MMM yyyy",
      full_year_week: "dd MMM yyyy",
      full_year_day: "dd MMM yyyy",
      full_year_hour: "HH dd MMM yyyy",
      full_year_minute: "dd MMM yyyy, HH:mm",
      full_year_second: "dd MMM yyyy, HH:mm:ss",
      full_year_millisecond: "dd MMM yyyy, HH:mm:ss.SSS",

      timeline_year: ["yyyy", "yy"],
      timeline_year_semester: ["Q yyyy", "Q ''yy"],
      timeline_year_quarter: ["QQ yyyy", "QQ ''yy", "Q yyyy", "Q ''yy"],
      timeline_year_month: ["MMMM yyyy", "MMM yyyy", "MMM ''yy", "MM ''yy"],
      timeline_year_third_of_month: [
        "EEEE, dd MMMM yyyy",
        "EE, dd MMM yyyy",
        "EE, dd MMM yy",
        "dd MMM yyyy",
        "dd MMMM yy",
        "MM.dd.yyyy",
        "MM.dd.yy"
      ],
      timeline_year_week: [
        "dd MMMM yyyy",
        "dd MMM yyyy",
        "dd MMMM yy",
        "dd MMM yy",
        "MM.dd.yyyy",
        "MM.dd.yy"
      ],
      timeline_year_day: [
        "EEEE, dd MMMM yyyy",
        "EE, dd MMM yyyy",
        "EE, dd MMM yy",
        "dd MMM yyyy",
        "dd MMMM yy",
        "MM.dd.yyyy",
        "MM.dd.yy"
      ],
      timeline_year_hour: [
        "dd MMMM yyyy HH'h'",
        "dd MMM yyyy HH'h'",
        "dd MMM yy HH'h'",
        "MM.dd.yyyy HH'h'",
        "MM.dd.yy HH'h'"
      ],
      timeline_year_minute: [
        "dd MMMM yyyy HH:mm",
        "dd MMM yyyy HH:mm",
        "dd MMM yy HH:mm",
        "MM.dd.yyyy HH:mm",
        "MM.dd.yy HH:mm"
      ],
      timeline_year_second: [
        "dd MMMM yyyy HH:mm:ss",
        "dd MMM yyyy HH:mm:ss",
        "dd MMM yy HH:mm:ss",
        "MM.dd.yyyy HH:mm:ss",
        "MM.dd.yy HH:mm:ss"
      ],
      timeline_year_millisecond: [
        "dd MMMM yyyy HH:mm:ss.SSS",
        "dd MMM yyyy HH:mm:ss.SSS",
        "dd MMM yy HH:mm:ss.SSS",
        "MM.dd.yyyy HH:mm:ss.SSS",
        "MM.dd.yy HH:mm:ss.SSS"
      ],

      timeline_semester: ["Q"],
      timeline_semester_quarter: ["QQ", "Q"],
      timeline_semester_month: ["MMMM", "MMM", "MM"],
      timeline_semester_third_of_month: [
        "EEEE, dd MMMM",
        "EE, dd MMM",
        "EE, dd MMM",
        "dd MMM",
        "dd MMMM",
        "MM.dd",
        "MM.dd"
      ],
      timeline_semester_week: ["dd MMMM", "dd MMM", "MM.dd", "MM.dd"],
      timeline_semester_day: [
        "EEEE, dd MMMM",
        "EE, dd MMM",
        "EE, dd MMM",
        "dd MMM",
        "dd MMMM",
        "MM.dd",
        "MM.dd"
      ],
      timeline_semester_hour: [
        "dd MMMM HH'h'",
        "dd MMM HH'h'",
        "dd MMM HH'h'",
        "MM.dd HH'h'",
        "MM.dd HH'h'"
      ],
      timeline_semester_minute: [
        "dd MMMM HH:mm",
        "dd MMM HH:mm",
        "dd MMM HH:mm",
        "MM.dd HH:mm",
        "MM.dd HH:mm"
      ],
      timeline_semester_second: [
        "dd MMMM HH:mm:ss",
        "dd MMM HH:mm:ss",
        "dd MMM HH:mm:ss",
        "MM.dd HH:mm:ss",
        "MM.dd HH:mm:ss"
      ],
      timeline_semester_millisecond: [
        "dd MMMM HH:mm:ss.SSS",
        "dd MMM HH:mm:ss.SSS",
        "dd MMM HH:mm:ss.SSS",
        "MM.dd HH:mm:ss.SSS",
        "MM.dd HH:mm:ss.SSS"
      ],

      timeline_quarter: ["QQ", "Q"],
      timeline_quarter_month: ["MMMM", "MMM", "MM"],
      timeline_quarter_third_of_month: [
        "EEEE, dd MMMM",
        "EE, dd MMM",
        "EE, dd MMM",
        "dd MMM",
        "dd MMMM",
        "MM.dd",
        "MM.dd"
      ],
      timeline_quarter_week: ["dd MMMM", "dd MMM", "MM.dd", "MM.dd"],
      timeline_quarter_day: [
        "EEEE, dd MMMM",
        "EE, dd MMM",
        "EE, dd MMM",
        "dd MMM",
        "dd MMMM",
        "MM.dd",
        "MM.dd"
      ],
      timeline_quarter_hour: [
        "dd MMMM HH'h'",
        "dd MMM HH'h'",
        "dd MMM HH'h'",
        "MM.dd HH'h'",
        "MM.dd HH'h'"
      ],
      timeline_quarter_minute: [
        "dd MMMM HH:mm",
        "dd MMM HH:mm",
        "dd MMM HH:mm",
        "MM.dd HH:mm",
        "MM.dd HH:mm"
      ],
      timeline_quarter_second: [
        "dd MMMM HH:mm:ss",
        "dd MMM HH:mm:ss",
        "dd MMM HH:mm:ss",
        "MM.dd HH:mm:ss",
        "MM.dd HH:mm:ss"
      ],
      timeline_quarter_millisecond: [
        "dd MMMM HH:mm:ss.SSS",
        "dd MMM HH:mm:ss.SSS",
        "dd MMM HH:mm:ss.SSS",
        "MM.dd HH:mm:ss.SSS",
        "MM.dd HH:mm:ss.SSS"
      ],

      timeline_month: ["MMMM", "MMM", "MM"],
      timeline_month_third_of_month: [
        "EEEE, dd MMMM",
        "EE, dd MMM",
        "EE, dd MMM",
        "dd MMM",
        "dd MMMM",
        "MM.dd",
        "MM.dd"
      ],
      timeline_month_week: ["dd MMMM", "dd MMM", "MM.dd", "MM.dd"],
      timeline_month_day: [
        "EEEE, dd MMMM",
        "EE, dd MMM",
        "EE, dd MMM",
        "dd MMM",
        "dd MMMM",
        "MM.dd",
        "MM.dd"
      ],
      timeline_month_hour: [
        "dd MMMM HH'h'",
        "dd MMM HH'h'",
        "dd MMM HH'h'",
        "MM.dd HH'h'",
        "MM.dd HH'h'"
      ],
      timeline_month_minute: [
        "dd MMMM HH:mm",
        "dd MMM HH:mm",
        "dd MMM HH:mm",
        "MM.dd HH:mm",
        "MM.dd HH:mm"
      ],
      timeline_month_second: [
        "dd MMMM HH:mm:ss",
        "dd MMM HH:mm:ss",
        "dd MMM HH:mm:ss",
        "MM.dd HH:mm:ss",
        "MM.dd HH:mm:ss"
      ],
      timeline_month_millisecond: [
        "dd MMMM HH:mm:ss.SSS",
        "dd MMM HH:mm:ss.SSS",
        "dd MMM HH:mm:ss.SSS",
        "MM.dd HH:mm:ss.SSS",
        "MM.dd HH:mm:ss.SSS"
      ],

      timeline_third_of_month: ["dd"],
      timeline_third_of_month_week: ["dd"],
      timeline_third_of_month_day: ["EEEE, dd", "EE, dd", "dd"],
      timeline_third_of_month_hour: [
        "EEEE, dd HH'h'",
        "EE, dd HH'h'",
        "dd HH'h'"
      ],
      timeline_third_of_month_minute: [
        "EEEE, dd HH:mm",
        "EE, dd HH:mm",
        "dd HH:mm"
      ],
      timeline_third_of_month_second: [
        "EEEE, dd HH:mm:ss",
        "EE, dd HH:mm:ss",
        "dd HH:mm:ss"
      ],
      timeline_third_of_month_millisecond: [
        "EEEE, dd HH:mm:ss.SSS",
        "EE, dd HH:mm:ss.SSS",
        "dd HH:mm:ss.SSS"
      ],

      timeline_week: ["dd"],
      timeline_week_day: ["EEEE, dd", "EE, dd", "dd"],
      timeline_week_hour: ["EEEE, dd HH'h'", "EE, dd HH'h'", "dd HH'h'"],
      timeline_week_minute: ["EEEE, dd HH:mm", "EE, dd HH:mm", "dd HH:mm"],
      timeline_week_second: [
        "EEEE, dd HH:mm:ss",
        "EE, dd HH:mm:ss",
        "dd HH:mm:ss"
      ],
      timeline_week_millisecond: [
        "EEEE, dd HH:mm:ss.SSS",
        "EE, dd HH:mm:ss.SSS",
        "dd HH:mm:ss.SSS"
      ],

      timeline_day: ["EEEE, dd", "EEEE, dd", "EE, dd", "dd"],
      timeline_day_hour: ["EEEE, dd HH'h'", "EE, dd HH'h'", "dd HH'h'"],
      timeline_day_minute: ["EEEE, dd HH:mm", "EE, dd HH:mm", "dd HH:mm"],
      timeline_day_second: [
        "EEEE, dd HH:mm:ss",
        "EE, dd HH:mm:ss",
        "dd HH:mm:ss"
      ],
      timeline_day_millisecond: [
        "EEEE, dd HH:mm:ss.SSS",
        "EE, dd HH:mm:ss.SSS",
        "dd HH:mm:ss.SSS"
      ],

      timeline_hour: ["HH'h'", "HH"],
      timeline_hour_minute: ["HH:mm"],
      timeline_hour_second: ["HH:mm:ss"],
      timeline_hour_millisecond: ["HH:mm:ss.SSS"],

      timeline_minute: ["mm''"],
      timeline_minute_second: ["mm''ss\""],
      timeline_minute_millisecond: ["mm''ss\"SSS", "mm''ss\"SS"],

      timeline_second: ['ss"', "ss"],
      timeline_second_millisecond: ['ss"SSS', 'ss"SS'],

      timeline_millisecond: ["SSS"],

      year: "yyyy",
      year_semester: "yyyy MMM",
      year_quarter: "yyyy MMM",
      year_month: "yyyy MMM",
      year_third_of_month: "MMM dd",
      year_week: "MMM dd",
      year_day: "MMM dd",
      year_hour: "MMM-dd HH",
      year_minute: "dd HH:mm",
      year_second: "HH:mm:ss",
      year_millisecond: "HH:mm:ss.SSS",

      semester: "MMM",
      semester_quarter: "MMM",
      semester_month: "MMM",
      semester_third_of_month: "dd",
      semester_week: "dd",
      semester_day: "dd",
      semester_hour: "HH",
      semester_minute: "HH:mm",
      semester_second: "HH:mm:ss",
      semester_millisecond: "SSS",

      quarter: "MMM",
      quarter_month: "MMM",
      quarter_third_of_month: "dd",
      quarter_week: "dd",
      quarter_day: "dd",
      quarter_hour: "HH",
      quarter_minute: "HH:mm",
      quarter_second: "HH:mm:ss",
      quarter_millisecond: "SSS",

      month: "MMM",
      month_third_of_month: "dd",
      month_week: "dd",
      month_day: "dd",
      month_hour: "HH",
      month_minute: "HH:mm",
      month_second: "HH:mm:ss",
      month_millisecond: "SSS",

      third_of_month: "dd",
      third_of_month_week: "dd",
      third_of_month_day: "dd",
      third_of_month_hour: "HH",
      third_of_month_minute: "HH:mm",
      third_of_month_second: "HH:mm:ss",
      third_of_month_millisecond: "SSS",

      week: "dd",
      week_day: "dd",
      week_hour: "HH",
      week_minute: "HH:mm",
      week_second: "HH:mm:ss",
      week_millisecond: "SSS",

      day: "dd",
      day_hour: "HH",
      day_minute: "HH:mm",
      day_second: "HH:mm:ss",
      day_millisecond: "SSS",

      hour: "HH",
      hour_minute: "HH:mm",
      hour_second: "HH:mm:ss",
      hour_millisecond: "SSS",

      minute: "HH:mm",
      minute_second: "HH:mm:ss",
      minute_millisecond: "SSS",

      second: "HH:mm:ss",
      second_millisecond: "SSS",

      millisecond: "SSS",

      charts_year: "yyyy",
      charts_semester: "MMM yyyy",
      charts_quarter: "MMM yyyy",
      charts_month: "MMM",
      charts_third_of_month: "dd MMM",
      charts_week: "dd MMM",
      charts_day: "dd MMM",
      charts_hour: "HH:mm",
      charts_minute: "HH:mm",
      charts_second: "HH:mm:ss",
      charts_millisecond: "HH:mm:ss.SSS",
      charts_year_semester: "MMM",
      charts_semester_quarter: "MMM",
      charts_quarter_month: "MMM",
      charts_month_third_of_month: "dd MMM",
      charts_third_of_month_week: "dd MMM",
      charts_week_day: "dd",
      charts_day_hour: "HH:mm",
      charts_hour_minute: "HH:mm",
      charts_minute_second: "HH:mm:ss",
      charts_second_millisecond: "HH:mm:ss.SSS"
    }
  },
  numberLocale: {
    decimalPoint: ".",
    groupsSeparator: "'",
    decimalsCount: 2,
    scale: false,
    zeroFillDecimals: false,
    scaleSuffixSeparator: ""
  }
};

window['anychart'] = window['anychart'] || {};
window['anychart']['format'] = window['anychart']['format'] || {};
window['anychart']['format']['locales'] = window['anychart']['format']['locales'] || {};
window['anychart']['format']['locales']['it-ch'] = locale;

export default locale;
