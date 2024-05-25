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
  const [rows, setRows] = useState<any[]>([]);
  const [selectedRows, setSelectedRows] = useState<string[]>([]);

  const handleOnSelectRow = (row: any) => {
    const key = Object.keys(row)[0];

    const contains = selectedRows.includes(key);
    if (!contains) {
      setSelectedRows(rows => [...rows, key]);
      return;
    }

    const filterSelected = selectedRows.filter(localKey => localKey !== key);
    setSelectedRows(filterSelected);
  };

  const handleOnDeleteRow = () => {
    selectedRows.forEach(key => {
      localStorage.removeItem(key);
    });

    setRows(getDataFromStorage());
  };

  useEffect(() => {
    setRows(getDataFromStorage());
  }, []);

  return (
    <div>
      <div className="flex justify-between">
        <div>
          <h2 className="font-bold text-xl">Aromatic bar</h2>
          <span className="text-gray-500 font-medium">
            {rows.length} records found
          </span>
        </div>
        <div className="flex justify-center items-center gap-4">
          <Link to={"/form"}>
            <Button className="bg-green-500">Add New</Button>
          </Link>
        </div>
      </div>

      <div className="bg-secondary mt-2">
        <Table className="overflow-scroll">
          <TableHeader className="bg-tertiary/20">
            <TableRow className="">
              <TableHead className="text-gray-600 font-bold border-[0.2px] border-gray-300 text-center min-w-20 max-h-10">
                Select
              </TableHead>
              <TableHead className="text-gray-600 font-bold  border-[0.3px] border-gray-300 text-center min-w-40 max-h-10">
                Form Details
              </TableHead>
              <TableHead className="text-gray-600 font-bold border-[0.3px] border-gray-300 text-center min-w-40 max-h-10">
                Customer Name
              </TableHead>
              <TableHead className="text-gray-600 font-bold  border-[0.3px] border-gray-300 text-center min-w-40 max-h-10">
                Email
              </TableHead>
              <TableHead className="text-gray-600 font-bold w-40 border-[0.3px] border-gray-300 text-center min-w-40 max-h-10">
                Phone
              </TableHead>
              <TableHead className="text-gray-600 font-bold border-[0.3px] border-gray-300 text-center  min-w-[500px] max-h-10">
                Please rate the quality of the service you received from your
                host.
              </TableHead>
              <TableHead className="text-gray-600 font-bold border-[0.3px] border-gray-300 text-center min-w-[320px] max-h-10">
                Please rate the quality of your bevarage.
              </TableHead>
              <TableHead className="text-gray-600 font-bold border-[0.3px] border-gray-300 text-center min-w-[240px] max-h-10">
                Was out restaurant clean ?
              </TableHead>
              <TableHead className="text-gray-600 font-bold border-[0.3px] border-gray-300 text-center min-w-[340px] max-h-10">
                Please rate your overall dining experience. ?
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows.length ? (
              rows.map(row => {
                const key = Object.keys(row)[0];
                const value = row[key];

                return (
                  <TableRow className="h-10 text-center" key={key}>
                    <TableCell className="flex justify-center items-center">
                      <Input
                        className="w-4 h-4 accent-tertiary active:ring-0 focus:ring-0"
                        type="checkbox"
                        onChange={() => {
                          handleOnSelectRow(row);
                        }}
                      />
                    </TableCell>
                    <TableCell className="font-medium text-gray-500 border-[0.3px] border-gray-300">
                      <Link to={`/${key}`} className="text-blue-500">
                        View details
                      </Link>
                    </TableCell>
                    <TableCell className="font-medium text-gray-500 border-[0.3px] border-gray-300">
                      {value.name}
                    </TableCell>
                    <TableCell className="font-medium text-gray-500 border-[0.3px] border-gray-300">
                      {value.email}
                    </TableCell>
                    <TableCell className="font-medium text-gray-500 border-[0.3px] border-gray-300">
                      {value.phone}
                    </TableCell>
                    <TableCell className="font-medium text-gray-500 border-[0.3px] border-gray-300">
                      {value.question1}
                    </TableCell>
                    <TableCell className="font-medium text-gray-500 border-[0.3px] border-gray-300">
                      {value.question2}
                    </TableCell>
                    <TableCell className="font-medium text-gray-500 border-[0.3px] border-gray-300">
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
        <Button onClick={handleOnDeleteRow} className="bg-[#ea4c89] mt-4">
          Delete
        </Button>
      </div>
    </div>
  );
}

export default FeedBackTable;
