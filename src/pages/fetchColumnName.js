// import axios from "axios";

// export async function fetchColumnNames(csvFileName: string): Promise<string[]> {
//   try {
//     const response = await axios.post("/api/csv-column-names/", {
//       csv_file_name: csvFileName,
//     });
//     const { column_names } = response.data;
//     console.log(response.data);
//     return column_names;
//   } catch (error) {
//     throw new Error("Failed to fetch column names.");
//   }
// }
import axios from "axios";
import ColumnBox from "./ColumnBox";

export async function fetchColumnNames(){
  try {
    const response = await axios.get ("http://127.0.0.1:8000/api/csv-header/");
    const  {column_names}  = response.data;
    
    console.log(response.data);
    
    return column_names
  } catch (error) {
    throw new Error("Failed to fetch column names.");
  }
}

export const columnFetcher = () => {
  axios({
    url: "http://127.0.0.1:8000/api/csv-header/",
    method: "GET",
  }).then((res) => {
    console.log(res);
    return(
      res.map((column)=> {
        <>
        <ColumnBox name={column} link={true} />
        </>
      })
    )
  });
};
