
import data from './datas';



export default function searchFunction(year, severity1, severity2) {
  console.log(year, severity1, severity2);


  const yearArr = data.filter(x => x.DATE_PUBLISHED.startsWith(year));

  if (severity2) {
    const severity2Arr = yearArr.filter(
      x =>
        Object.values(x).includes(severity2) ||
        Object.values(x).includes(severity1)
    );
    console.log(severity2Arr.length, "number of cases with: ", severity2);

    return severity2Arr;
  }

  if (severity1) {
    const severity1Arr = yearArr.filter(x =>
      Object.values(x).includes(severity1)
    );
    console.log(severity1Arr.length, "number of cases with :", severity1);
    return severity1Arr;
  }
  console.log(yearArr.length);
  return yearArr;


  
}

