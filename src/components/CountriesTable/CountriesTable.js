import { StylesProvider } from "@material-ui/core";
import { KeyboardArrowDownRounded, KeyboardArrowUpRounded, StayCurrentLandscape } from "@material-ui/icons";
import { useState } from "react";
import styles from './CountriesTable.module.css';
import Link from "next/link";

const orderBy = (countries, namePapulation, direction) => {
    if (direction == 'asc') {
        return [...countries].sort((a, b) => (a[namePapulation] > b[namePapulation] ? 1 : -1))
    }
    if (direction == 'desc') {
        return [...countries].sort((a, b) => (a[namePapulation] > b[namePapulation] ? -1 : 1))
    }
    return countries;
}
const SortArrow = ({ direction }) => {
    if (!direction) {
        return <></>
    }
    if (direction === 'desc') {
        return (
            <div className={styles.heading_arrow}>
                <KeyboardArrowDownRounded color="inherit" />
            </div>)
    }
    else {
        return (
            <div className={styles.heading_arrow}>
                <KeyboardArrowUpRounded color="inherit" />
            </div>)
    }
}
const CountriesTable = ({ countries }) => {
    const [direction, setDirection] = useState("desc");
    const [namePapulation, setnamePapulation] = useState();
    console.log("DirectionValue", direction);
    console.log(namePapulation, "namePapulation")
    const orderedCountries = orderBy(countries, namePapulation, direction);

    const switchDirection = () => {
        console.log("HHHH", direction);
        if (!direction) {
            setDirection("desc");
        } else if (direction === 'desc') {
            setDirection('asc')
        }
        else if (direction === 'asc') {
            setDirection('desc')
        }
        else {
            setDirection(null);
        }
    }
    const setValueAndDirection = (value) => {
        console.log(value, "Value");
        switchDirection();
        setnamePapulation(value);
        console.log("JJJJJJsdlks", namePapulation);
    }
    return (
        <div>
            <div className={styles.heading}>
                <div className={styles.heading_flag}>

                </div>
                <button className={styles.heading_name} onClick={() => setValueAndDirection('name')}>
                    <div>Name</div>
                    {namePapulation==='name' && <SortArrow direction={direction} /> } 
                </button>
                <button className={styles.heading_population} onClick={() => setValueAndDirection('population')}>

                    <div>Population</div>
                    {namePapulation==='population' && <SortArrow direction={direction} /> } 
                </button>
                <button className={styles.heading_area} onClick={() => setValueAndDirection('area')}>

                    <div>Area (km<sup style={{fontSize:"0.5rem"}}>2</sup>)</div>
                    {namePapulation==='area' && <SortArrow direction={direction} /> } 
                </button>
                <button className={styles.heading_gini} onClick={() => setValueAndDirection('gini')}>

                    <div>Gini</div>
                    {namePapulation==='gini' && <SortArrow direction={direction} /> } 
                </button>
            </div>
            {orderedCountries.map((country, index) => (
                <div key={index} className={styles.row}>
                    <Link href={`/Country/${country.alpha2Code}`}>
                        <div className={styles.subrow}>
                        <div className={styles.flag}> <img src = {country.flag} alt={country.name}></img> </div>
                            <div className={styles.name}> {country.name}</div>
                            <div className={styles.population}> {country.population}</div>
                            <div className={styles.area}> {country.area || 0}</div>
                            <div className={styles.gini}> {country.gini || 0}%</div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>)
}
export default CountriesTable;