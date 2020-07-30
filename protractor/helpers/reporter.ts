import { SpecReporter, StacktraceOption } from 'jasmine-spec-reporter';

export let reporter = () => {

  jasmine.getEnv().addReporter(new SpecReporter({
    spec: {
      displayStacktrace: StacktraceOption.PRETTY
    }
  }));

  const { AwesomeReport } = require('jasmine-awesome-report');

  const config = {
    fullPath: 'reports',
    fileName: 'awesome',
    merge: true
  };

  jasmine.getEnv().addReporter(AwesomeReport.getReport(config));

};
