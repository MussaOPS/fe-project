import balanceImage from "../../../assets/header/balance.svg";
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import React, {useState} from "react";

const TopSection = () => {
    const [age, setAge] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
    };

    return (
        <div className="flex justify-between">
            <div className="h-full">
                <ul className="flex items-center gap-2 h-full">
                    <li>
                        <a href="#">Address</a>
                    </li>
                    <li>
                        <a href="#">For sellers</a>
                    </li>
                    <li>
                        <a href="#">Vacancies</a>
                    </li>
                </ul>
            </div>

            <div className="h-full flex items-center gap-2">
                <div className="h-full flex items-center gap-2">
                    <img src={balanceImage} alt={"balance"}/>
                    <a>Balance</a>
                </div>

                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Age</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={"KZT"}
                        label="Age"
                        onChange={handleChange}
                    >
                        <MenuItem value={"KZT"}>KZT</MenuItem>
                        <MenuItem value={"USD"}>USD</MenuItem>
                        <MenuItem value={"AED"}>AED</MenuItem>
                    </Select>
                </FormControl>
            </div>
        </div>
    );
}

export default TopSection;
