import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Button, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

function FindTM(props)
{
    //Use State
const [searchName, setSearchName] = useState("")
    //Custom Method
function onSubmit(e)
{
    e.preventDefault()
    props.searchTM(searchName);
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
            <h1 style={{textAlign: "center", textDecoration: "underline"}}>Search For TM</h1>
            <Link to={"/HelpFind"} style={{color: "inherit", float: "right"}}><Button sx={{backgroundColor: "Black", color: "Yellow", m: 2}} variant={"contained"}>Didnt Find The TM Your Looking For?</Button></Link>
            <Link to={"/"} style={{color: "inherit"}}><Button sx={{backgroundColor: "Black", color: "Yellow", m: 2}} variant={"contained"}>Go Back</Button></Link>
            <form style={{textAlign: "center"}} onSubmit={(e) => onSubmit(e)}>
                <input style={{width: 200, height: 50, fontSize: 20}}
                placeholder={"Search Item Name....."}
                value={searchName}
                onChange={(e) => setSearchName(e.target.value)}
                />
                <Button style={{textAlign: "center"}} type={"submit"} onClick={onSubmit} sx={{backgroundColor: "Black", color: "Yellow", m: 2}} variant={"contained"}>Search</Button>
            </form>

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
                            {props.TMSearch.map((row) => (


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

export default FindTM