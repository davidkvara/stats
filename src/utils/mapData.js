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

export const apiURL =
  "https://services.arcgis.com/5T5nSi527N4F7luB/arcgis/rest/services/COVID_19_Historic_cases_by_country_pt_v7_view/FeatureServer/0/query?where=ISO_3_CODE%3D%27geo%27&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=date_epicrv%2CADM0_NAME%2CShort_Name_AR%2CShort_Name_ZH%2CShort_Name_RU%2CShort_Name_ES%2CShort_Name_FR%2CISO_3_CODE%2CNewCase%2CCaseLast7Days%2CCaseLast7DaysChange%2CCumCase%2CCumCasePop%2CNewDeath%2CDeathLast7Days%2CDeathLast7DaysChange%2CCumDeath%2CCumDeathPop%2CISO_2_CODE%2CWHO_REGION&returnGeometry=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=4326&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=true&orderByFields=date_epicrv+desc&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=true&quantizationParameters=&sqlFormat=none&f=pjson&token=";
