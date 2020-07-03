
type Props = {
  response: any[];
  fields: string[];
}

// parse data - get IDs from urls

export const parseFields = ({ response, fields }: Props) => {
  for (let i = 0; i < response.length; i++) {
    const current = response[i]; // row
    for (let j = 0; j < fields.length; j++) {
      const field = fields[j]; // field
      if (current[field] && Array.isArray(current[field])) {
        const elem = current[field]; // each value of given field
        for (let k = 0; k < elem.length; k++) {
          const urlLike = elem[k];
          const ID = urlLike.split('/')[5];
          elem.splice(k, 1, ID);
        }
      }
      if (typeof current[field] === 'string') { // not an array
        if (field === 'birth_year') {
          const birthYear = current[field];
          const val = birthYear
            .replace("BBY", "");
          current['birth_year_value'] = isNaN(+val) ? null : +val;
        } else {
          const urlLike = current[field];
          const ID = urlLike.split('/')[5];
          current[field] = ID;
        }
      }
    }
  }
  return response;
};

