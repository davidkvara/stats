export const mapCovData = data => {
  return data.map(({ attributes }) => ({
    id: attributes.date_epicrv,
    cases: attributes.CumCase,
    casesLast7Days: attributes.CaseLast7Days,
    death: attributes.CumDeath,
    deathLast7Days: attributes.DeathLast7Days,
    newCases: attributes.NewCase,
    deathToday: attributes.NewDeath
  }));
};
