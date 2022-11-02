import React from "react";
import "../StyleSheet/SeeALLTMStyleSheet.css"
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {Link} from "react-router-dom";


function SeeAllTM(props)
{
    //Use State

    //Custom Method

    //Main
    return (
        < >
            <div className={"LoginPage"}>
                <div className={"LoginStatus"}>
                    {props.aUserLoggedIn ? <p>Login as:  {props.userLogedIn}</p> : <p>Login as: Guest</p>}
                </div>
            </div>
            <div style={{textAlign: "center"}}>
                <img className={"swfLogo"} src="https://afcwebsite.blob.core.usgovcloudapi.net/uploads/assets/sf_logo_1c_776c839b0c.svg" alt=""></img>
            </div>
            <h1 style={{textAlign: "center", textDecoration: "underline"}}>View All TM</h1>
            <h3 style={{textAlign: "center" , textDecoration: "underline"}}>Select The Equpment Name To View PMCS Section of TM</h3>
            <Link to={"/"} style={{color: "inherit"}}><Button sx={{backgroundColor: "Black", color: "Yellow", m: 2}} variant={"contained"}>Go Back</Button></Link>
            <div className={"listOfTM"}>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell><strong>Id</strong></TableCell>
                            <TableCell><strong>Equipment Name</strong></TableCell>
                            <TableCell align="right"><strong>Publish Date</strong></TableCell>
                            <TableCell align="right"><strong>TM Number</strong></TableCell>
                            <TableCell align="right"><strong>Page Count</strong></TableCell>
                            <TableCell align="right"><strong>PMCS Page Start</strong></TableCell>

                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.allTM.map((row) => (


                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >

                                <TableCell component="th" scope="row" align="left">{row.id}</TableCell>


                                <TableCell ><a href={row.link} target="_blank" rel="noreferrer" >{row.itemName}</a></TableCell>

                                <TableCell align="right">{row.publishDate}</TableCell>
                                <TableCell align="right">{row.tmNumber}</TableCell>
                                <TableCell align="right">{row.pageCount}</TableCell>
                                <TableCell align="right">{row.pagePmcsStart}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            </div>
        </>
    )
}
export default SeeAllTM