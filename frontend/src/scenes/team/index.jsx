import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";


import React, { useState, useEffect, useContext } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import CreateIcon from '@mui/icons-material/Create';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { NavLink } from 'react-router-dom';
 import { adddata, deldata } from '../../components/context/ContextProvider';
import { updatedata } from '../../components/context/ContextProvider'


const Team = () => {
  var allData = [
    {
        "id": 3,
        "candidatename": "Akshay Nevla",
        "gender": "Male",
        "currentorganisation": "Freelancer",
        "currentdesignation": "Engineer",
        "overallexp": "5",
        "relevantexp": "2",
        "qualification": "M tech",
        "perferredlocation": "Nagpur",
        "currentsalary": "1200000",
        "expectedsalary": "1500000",
        "variable": "50000",
        "fixed": "1200000",
        "other": "00",
        "age": "26",
        "noticeperiod": "2 months",
        "nationality": "India",
        "visatype": "Indian",
        "remarks": "None",
        "pannumber": "1234",
        "linkedinurl": "akshayninwae21",
        "functionalarea": "Web development",
        "dob": "21/12/1991",
        "joininglocation": "Blr",
        "reportinglocation": "Blr",
        "source": "Internet",
        "maritalstatus": "Single",
        "resume": "link"
    },
    {
        "id": 5,
        "candidatename": "h",
        "gender": "h",
        "currentorganisation": "h",
        "currentdesignation": "h",
        "overallexp": "h",
        "relevantexp": "h",
        "qualification": "h",
        "perferredlocation": "h",
        "currentsalary": "h",
        "expectedsalary": "h",
        "variable": "h",
        "fixed": "h",
        "other": "h",
        "age": "h",
        "noticeperiod": "h",
        "nationality": "h",
        "visatype": "h",
        "remarks": "h",
        "pannumber": "h",
        "linkedinurl": "h",
        "functionalarea": "h",
        "dob": "h",
        "joininglocation": "h",
        "reportinglocation": "h",
        "source": "h",
        "maritalstatus": "h",
        "resume": "h"
    },
    {
        "id": 6,
        "candidatename": "sdsf",
        "gender": "female",
        "currentorganisation": "dsdd",
        "currentdesignation": "d",
        "overallexp": "d",
        "relevantexp": "d",
        "qualification": "d",
        "perferredlocation": "d",
        "currentsalary": "d",
        "expectedsalary": "d",
        "variable": "d",
        "fixed": "d",
        "other": "d",
        "age": "d",
        "noticeperiod": "d",
        "nationality": "d",
        "visatype": "d",
        "remarks": "d",
        "pannumber": "d",
        "linkedinurl": "d",
        "functionalarea": "d",
        "dob": "2023-06-13",
        "joininglocation": "d",
        "reportinglocation": "d",
        "source": "d",
        "maritalstatus": "d",
        "resume": ""
    }
]
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "candidatename",
      headerName: "Candidate Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "gender",
      headerName: "Gender",
      type: "number",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "dob",
      headerName: "Current Organisation",
      flex: 1,
    },
    {
      field: "remarks",
      headerName: "Current Designation",
      flex: 1,
    },
   
  ];

  
  const [getuserdata, setUserdata] = useState([]);
  console.log("getuserdata",getuserdata);

  const { udata, setUdata } = useContext(adddata);

  const {updata, setUPdata} = useContext(updatedata);

  const {dltdata, setDLTdata} = useContext(deldata);

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

  const deleteuser = async (id) => {

      const res2 = await fetch(`deleteuser/${id}`, {
          method: "DELETE",
          headers: {
              "Content-Type": "application/json"
          }
      });

      const deletedata = await res2.json();
      console.log(deletedata);

      if (res2.status === 422 || !deletedata) {
          console.log("error");
      } else {
          console.log("user deleted");
          setDLTdata(deletedata)
          getdata();
      }

  }


  return (
    <Box m="20px">
      <Header title="TEAM" subtitle="Managing the Team Members" />
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

export default Team;
