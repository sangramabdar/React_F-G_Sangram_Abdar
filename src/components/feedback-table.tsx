import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Button from "./button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "./table";
import Input from "./input";
import { getDataFromStorage } from "../utls/localstorage";

function FeedBackTable() {
  const [data, setData] = useState<any[]>([]);
  const [selected, setSelected] = useState<string[]>([]);

  const handleOnChange = (row: any) => {
    const key = Object.keys(row)[0];

    const contains = selected.includes(key);
    if (!contains) return selected.push(key);

    const filterSelected = selected.filter(localKey => localKey !== key);
    setSelected(filterSelected);
  };

  const handleOnClick = () => {
    selected.forEach(key => {
      localStorage.removeItem(key);
    });

    setData(getDataFromStorage());
  };

  useEffect(() => {
    setData(getDataFromStorage());
  }, []);

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h2 className="font-bold text-xl">Aromatic bar</h2>
          <div className="space-x-2">
            <span className="text-gray-500 font-medium">
              {data.length} records found
            </span>
            .<span className="text-gray-500">Text-2</span>
          </div>
        </div>
        <div className="flex justify-center items-center gap-4">
          <div>search</div>
          <Link to={"/form"}>
            <Button className="bg-green-500">Add New</Button>
          </Link>
        </div>
      </div>

      <div className="bg-secondary mt-2">
        <Table className="overflow-scroll">
          <TableHeader className="bg-tertiary/20">
            <TableRow className="">
              <TableHead className="text-gray-600 font-bold  border-[0.3px] border-gray-500 text-center min-w-20 max-h-10">
                Select
              </TableHead>
              <TableHead className="text-gray-600 font-bold  border-[0.3px] border-gray-500 text-center min-w-40 max-h-10">
                Form Details
              </TableHead>
              <TableHead className="text-gray-600 font-bold  border-[0.3px] border-gray-500 text-center min-w-40 max-h-10">
                Customer Name
              </TableHead>
              <TableHead className="text-gray-600 font-bold  border-[0.3px] border-gray-500 text-center min-w-40 max-h-10">
                Email
              </TableHead>
              <TableHead className="text-gray-600 font-bold w-40 border-[0.3px] border-gray-500 text-center min-w-40 max-h-10">
                Phone
              </TableHead>
              <TableHead className="text-gray-600 font-bold border-[0.3px] border-gray-500 text-center  min-w-[500px] max-h-10">
                Please rate the quality of the service you received from your
                host.
              </TableHead>
              <TableHead className="text-gray-600 font-bold border-[0.3px] border-gray-500 text-center min-w-[320px] max-h-10">
                Please rate the quality of your bevarage.
              </TableHead>
              <TableHead className="text-gray-600 font-bold border-[0.3px] border-gray-500 text-center min-w-[240px] max-h-10">
                Was out restaurant clean ?
              </TableHead>
              <TableHead className="text-gray-600 font-bold border-[0.3px] border-gray-500 text-center min-w-[340px] max-h-10">
                Please rate your overall dining experience. ?
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.length ? (
              data.map(row => {
                const key = Object.keys(row)[0];
                const value = row[key];

                return (
                  <TableRow className="h-10 text-center" key={key}>
                    <TableCell className="flex justify-center items-center">
                      <Input
                        className="w-4 h-4 mt-[-2px] accent-tertiary active:ring-0 focus:ring-0"
                        type="checkbox"
                        label={""}
                        onChange={() => {
                          handleOnChange(row);
                        }}
                      />
                    </TableCell>
                    <TableCell className="font-medium text-gray-500">
                      <Link to={`/${key}`} className="text-blue-500">
                        View details
                      </Link>
                    </TableCell>
                    <TableCell className="font-medium text-gray-500">
                      {value.name}
                    </TableCell>
                    <TableCell className="font-medium text-gray-500">
                      {value.email}
                    </TableCell>
                    <TableCell className="font-medium text-gray-500">
                      {value.phone}
                    </TableCell>
                    <TableCell className="font-medium text-gray-500">
                      {value.question1}
                    </TableCell>
                    <TableCell className="font-medium text-gray-500">
                      {value.question2}
                    </TableCell>
                    <TableCell className="font-medium text-gray-500">
                      {value.question3}
                    </TableCell>
                    <TableCell className="font-medium text-gray-500">
                      {value.question4}
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow className="h-20">
                <TableCell>Empty</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>

      <div className="flex justify-end">
        <Button onClick={handleOnClick} className="bg-green-500 mt-4">
          Delete
        </Button>
      </div>
    </div>
  );
}

export default FeedBackTable;
