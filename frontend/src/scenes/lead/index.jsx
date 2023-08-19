import { Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import Button from '@mui/material/Button';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import Header from "../../components/Header";
import React, { useState, useEffect, useContext } from 'react'


const Lead = () => {
  
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    {
      field: "Name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "Status",
      headerName: "Status",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "Lead_Managed_By",
      headerName: "Lead Managed By",
      flex: 1,
    },
   
  ];

  
  const [getuserdata, setUserdata] = useState([]);
  console.log("getuserdata",getuserdata);

  const getdata = async () => {

      const res = await fetch("http://localhost:8001/getusers", {
          method: "GET",
          headers: {
              "Content-Type": "application/json"
          }
      });
      

      const data = await res.json();
     

      if (res.status === 422 || !data) {
          console.log("error ");

      } else {
          setUserdata(data)
          console.log("get data");

      }
  }

  useEffect(() => {
      getdata();
  }, [])

  return (
    <Box m="20px">
     
      
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[700],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[700],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        {/* <DataGrid checkboxSelection rows={mockDataTeam} columns={columns} /> */}
        <DataGrid checkboxSelection rows={getuserdata} columns={columns} />
      </Box>
    </Box>
  );
};

export default Lead;