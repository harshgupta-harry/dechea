import _ from 'lodash';

const renderHeading = (val, optionsData) => {
  if (val.length <= 0) {
    return 'Select Employees';
  } else if (val.length === optionsData.length) {
    return 'All employee';
  } else {
    var flags = [],
      output = [],
      l = optionsData.length,
      i;
    for (i = 0; i < l; i++) {
      if (flags[optionsData[i].position]) continue;
      flags[optionsData[i].position] = true;
      if (optionsData[i].position) {
        output.push(optionsData[i].position);
      }
    }

    let a = _.times(output.length, (i) => {
      let c = _.filter(val, { position: output[i] });
      let b = _.filter(optionsData, { position: output[i] });
      console.log(output[i], c, b, 'ckshkcbkdscsdcsdc');
      if (c.length === b.length) {
        return output[i];
      }
    });

    return a;
  }
};

export { renderHeading };
