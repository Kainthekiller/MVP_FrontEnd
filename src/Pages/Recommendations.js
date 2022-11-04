import React from "react";
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {Link} from "react-router-dom";


function Recommendations(props)
{
    //Use State

    //Custom Method
function handleDelete(id)
{
    props.DeleteRecommendation(id);
}
    //Main

    return (
        <>
            <div className={"LoginStatus"}>
                {props.aUserLoggedIn ? <p>Login as:  {props.userLogedIn}</p> : <p>Login as: Guest</p>}
            </div>
            <div style={{textAlign: "center"}}>
                <img className={"swfLogo"} src="https://afcwebsite.blob.core.usgovcloudapi.net/uploads/assets/sf_logo_1c_776c839b0c.svg" alt=""></img>
            </div>
            <h1 style={{textAlign: "center"}}>Recommendations</h1>
            <h3 style={{textAlign: "center"}}>Recommended Addition for the Database</h3>
            <Link to={"/AdminTools"} style={{color: "inherit"}}><Button sx={{backgroundColor: "Black", color: "Yellow", m: 2}} variant={"contained"}>Go Back</Button></Link>
            <div className={"listOfTM"}>
                <TableContainer component={Paper}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell><strong>Id</strong></TableCell>
                                <TableCell><strong>Equipment Name</strong></TableCell>
                                <TableCell align="right"><strong>Category</strong></TableCell>
                                <TableCell align="right"><strong>Brief Description</strong></TableCell>
                                <TableCell align="right"><strong>Unique Names</strong></TableCell>
                                <TableCell align="right"><strong>Delete Recommendation</strong></TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {props.allRecommendations.map((row) => (


                                <TableRow
                                    key={row.id}
                                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                >

                                    <TableCell component="th" scope="row" align="left">{row.id}</TableCell>


                                    <TableCell >{row.itemName}</TableCell>

                                    <TableCell align="right">{row.category}</TableCell>
                                    <TableCell align="right">{row.brief}</TableCell>
                                    <TableCell align="right">{row.uniqueName}</TableCell>
                                    <TableCell align={"right"}><Button onClick={() => {handleDelete(row.id)}}>Delete</Button></TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
            </div>
        </>
    )
}

export default Recommendations