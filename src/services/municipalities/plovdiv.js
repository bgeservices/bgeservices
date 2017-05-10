module.exports = {
  label: 'Пловдив',
  payment: {
    label: 'Плащане на местни данъци и ТБО',
    desc: 'Позволява заплащане чрез дебитна/кредитна карта',
    link: 'http://mdt.plovdiv.bg:8081/OnlineReportWSClient/obligations',
    isSecure: false,
  },
  report: {
    label: 'Справка за задължения',
    desc: 'Позволява обобщена информация само по ЕГН или подробна чрез УЕП или потребителско име и парола.',
    link: 'http://registry.plovdiv.bg/plvduties/',
    isSecure: false,
  },
}